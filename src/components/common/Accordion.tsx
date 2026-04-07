import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { AccordionItem } from '../../types';

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItemComponent({ item, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? 'border-primary-300 shadow-md shadow-primary-100'
          : 'border-gray-200 hover:border-primary-200'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ${
          isOpen ? 'bg-primary-50' : 'bg-white hover:bg-gray-50'
        }`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-header-${item.id}`}
      >
        <span
          className={`font-semibold text-base pr-4 ${
            isOpen ? 'text-primary-700' : 'text-gray-800'
          }`}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`flex-shrink-0 ${isOpen ? 'text-primary-600' : 'text-gray-400'}`}
          aria-hidden="true"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${item.id}`}
            role="region"
            aria-labelledby={`accordion-header-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 pt-2">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3" role="list">
      {items.map((item, index) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
          index={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
