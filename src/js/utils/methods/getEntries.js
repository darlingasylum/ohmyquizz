import api from "./../api";

export default function getEntries(contentType) {
  return new Promise(resolve => {
    api.then(env => {
      env.getEntries({ content_type: contentType }).then(entries => {
        resolve(entries);
      });
    });
  });
}
