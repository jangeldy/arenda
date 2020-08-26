import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();
const intersectionObserver = new IntersectionObserver(entries => {
  let [entry] = entries;
  if (entry.isIntersecting) {
    setTimeout(() => {
      intersectionObserver.unobserve(entry.target);
      entry.target.style.backgroundColor = 'transparent';
    }, 400);
  }
});

browserHistory.listen(location => {
  const { hash } = location;
  if (hash !== '') {
    setTimeout(() => {
      const anchor = hash.replace('#', '').replace('anchor_', 'group_anchor_');
      const group = anchor.replace('anchor_', '');
      const elementAnchor = document.getElementById(anchor);
      const elementGroup = document.getElementById(group);
      if (elementGroup && elementAnchor) {
        elementGroup.style.backgroundColor = 'rgba(129,129,129,0.30)';
        elementAnchor.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center'
        });
        intersectionObserver.observe(elementGroup);
      }
    }, 0);
  }
});

export const history = browserHistory;
