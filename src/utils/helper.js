async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
}

function fetchNames(nameType) {
  return fetchData(
    `https://corsproxy.io/?https://www.randomlists.com/data/names-${nameType}.json`
  );
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function generateName(gender) {
  try {
    const response = await Promise.all([
      fetchNames(gender || pickRandom(["male", "female"])),
      fetchNames("surnames"),
    ]);

    const [firstNames, lastNames] = response;

    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);

    return firstName + lastName;
  } catch (error) {
    console.error("Unable to generate name:", error);
  }
}

export async function logRandomName(gender) {
  try {
    const firstName = await generateName(gender);
    return firstName || "";
  } catch (error) {
    console.error("Error while getting random name:", error);
    return "";
  }
}

export function makeRandomMessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
