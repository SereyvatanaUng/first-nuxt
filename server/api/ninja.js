export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // handle post data
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_QlyIfRBaVRCGlbN8v6rFk0j7T7pI6izGxekDlvYL"
  );

  return data;
});
