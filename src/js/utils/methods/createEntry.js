import api from "./../api";

export default function createEntry(entryName, data) {
  api.then(env => {
    env
      .createEntry(entryName, {
        fields: {
          ...data
        }
      })
      .then(res => {
        api.then(env => {
          env.getEntry(res.sys.id).then(entry => {
            entry.publish();
          });
        });
        console.log("reeeees", res);
      })
      .catch(err => {
        console.log(err);
      });
  });
}
