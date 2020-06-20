import { useState, useEffect } from 'react';

export const usePageTitle = pageTitle => {
  // const [pageTitle, setPageTitle] = useState(initial);

  useEffect(() => {
    document.title = `${pageTitle} | The Bean Bar`;
  });

  // return { pageTitle, setPageTitle };
};
