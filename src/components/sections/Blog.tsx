import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../utils/constants';
import SectionHeader from '../common/SectionHeader';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeader
            badge="Resources"
            title="Learn & Explore"
            subtitle="Expert insights, admission guides, and career tips to help you make smarter education decisions."
            centered={false}
          />
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="View all blog posts"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Blog posts"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              role="listitem"
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {/* Replace with appropriate blog post featured image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <button
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded hover:gap-3 transition-all duration-200 self-start"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Blog;
