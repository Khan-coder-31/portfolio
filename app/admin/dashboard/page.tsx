"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, FolderKanban, Briefcase, LogOut, Plus, Search, Trash2, Edit3, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'projects' | 'experience'>('projects');
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    }
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      const headers = { 'Authorization': token || '' };

      const projRes = await fetch('/api/admin/projects', { headers });
      const expRes = await fetch('/api/admin/experience', { headers });

      if (projRes.ok) setProjects(await projRes.json());
      if (expRes.ok) setExperiences(await expRes.json());
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  const openModal = (item = null) => {
    setEditingItem(item);
    if (item) {
      setFormData(item);
    } else {
      setFormData(activeTab === 'projects'
        ? { title: '', description: '', techStack: '', imageUrl: '', liveLink: '', githubLink: '', category: '', featured: false }
        : { company: '', role: '', duration: '', description: '', logoUrl: '', isCurrent: false }
      );
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('admin_token');
    const headers = {
      'Authorization': token || '',
      'Content-Type': 'application/json'
    };

    const endpoint = activeTab === 'projects'
      ? `/api/admin/projects${editingItem ? `/${editingItem._id}` : ''}`
      : `/api/admin/experience${editingItem ? `/${editingItem._id}` : ''}`;

    const method = editingItem ? 'PATCH' : 'POST';

    // Special handling for arrays (techStack, description)
    const submitData = { ...formData };
    if (activeTab === 'projects' && typeof submitData.techStack === 'string') {
      submitData.techStack = submitData.techStack.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (activeTab === 'experience' && typeof submitData.description === 'string') {
      submitData.description = submitData.description.split('\n').map(s => s.trim()).filter(Boolean);
    }

    try {
      const res = await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(submitData),
      });

      if (res.ok) {
        await fetchData();
        closeModal();
      } else {
        const err = await res.json();
        alert(err.error || "Something went wrong");
      }
    } catch (err) {
      alert("Network error occurred");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    const token = localStorage.getItem('admin_token');
    const endpoint = activeTab === 'projects'
      ? `/api/admin/projects/${id}`
      : `/api/admin/experience/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: 'DELETE',
        headers: { 'Authorization': token || '' },
      });

      if (res.ok) {
        await fetchData();
      } else {
        alert("Failed to delete item");
      }
    } catch (err) {
      alert("Network error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <LayoutDashboard className="text-indigo-500" /> Admin Panel
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'projects' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <FolderKanban size={20} /> Projects
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'experience' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Briefcase size={20} /> Experience
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white capitalize">
              Manage {activeTab}
            </h1>
            <p className="text-slate-400">Add, edit or remove your {activeTab} from the database.</p>
          </div>
          <button
            onClick={() => openModal()}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all"
          >
            <Plus size={18} /> Add New
          </button>
        </header>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-800/50 text-slate-400 text-sm">
                <tr>
                  <th className="p-4 font-medium">Name/Title</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {activeTab === 'projects' ? (
                  projects.map((p: any) => (
                    <tr key={p._id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-white font-medium">{p.title}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">Live</span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => openModal(p)}
                          className="p-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(p._id)}
                          className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  experiences.map((e: any) => (
                    <tr key={e._id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-white font-medium">{e.role} @ {e.company}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-[10px] rounded-full border ${e.isCurrent ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                          {e.isCurrent ? 'Current' : 'Past'}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => openModal(e)}
                          className="p-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(e._id)}
                          className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
                {(activeTab === 'projects' ? projects : experiences).length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-12 text-center text-slate-500">
                      No {activeTab} found. Click "Add New" to start.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  {editingItem ? `Edit ${activeTab === 'projects' ? 'Project' : 'Experience'}` : `Add New ${activeTab === 'projects' ? 'Project' : 'Experience'}`}
                </h3>
                <button onClick={closeModal} className="text-slate-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeTab === 'projects' ? (
                    <>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Project Title*</label>
                        <input
                          required name="title" value={formData.title} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Category</label>
                        <input
                          name="category" value={formData.category} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm text-slate-400">Description*</label>
                        <textarea
                          required name="description" value={formData.description} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Tech Stack (comma separated)</label>
                        <input
                          name="techStack" value={Array.isArray(formData.techStack) ? formData.techStack.join(', ') : formData.techStack}
                          onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Image URL</label>
                        <input
                          name="imageUrl" value={formData.imageUrl} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Live Link</label>
                        <input
                          name="liveLink" value={formData.liveLink} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">GitHub Link</label>
                        <input
                          name="githubLink" value={formData.githubLink} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex items-center gap-2 md:col-span-2">
                        <input
                          type="checkbox" name="featured" checked={formData.featured} onChange={handleInputChange}
                          className="w-4 h-4 accent-indigo-500"
                        />
                        <label className="text-sm text-slate-400">Mark as Featured Project</label>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Company*</label>
                        <input
                          required name="company" value={formData.company} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Role*</label>
                        <input
                          required name="role" value={formData.role} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Duration*</label>
                        <input
                          required name="duration" value={formData.duration} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Logo URL</label>
                        <input
                          name="logoUrl" value={formData.logoUrl} onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm text-slate-400">Description (One per line)*</label>
                        <textarea
                          required name="description" value={Array.isArray(formData.description) ? formData.description.join('\n') : formData.description}
                          onChange={handleInputChange}
                          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                        />
                      </div>
                      <div className="flex items-center gap-2 md:col-span-2">
                        <input
                          type="checkbox" name="isCurrent" checked={formData.isCurrent} onChange={handleInputChange}
                          className="w-4 h-4 accent-indigo-500"
                        />
                        <label className="text-sm text-slate-400">Is this current experience?</label>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex justify-end gap-3 pt-6">
                  <button
                    type="button" onClick={closeModal}
                    className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    {editingItem ? 'Save Changes' : 'Create Entry'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
