import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';
import { Contact } from '../Types/CotactsTypes';

// takes a collection name
const useFirestore = (collection: string, docId: string) => {
  // STATES
  const [docs, setDocs] = useState<Contact[] | []>([]);

  // HOOKS
  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .doc(docId)
      .collection('contacts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snaps) => {
        let documents: any[] = [];
        snaps.forEach((doc) => documents.push({ ...doc.data(), id: doc.id }));
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useFirestore;
