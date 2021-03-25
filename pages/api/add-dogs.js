export default async (req, res) => {
  const request = await fetch('https://db-leerob.harperdbcloud.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.HARPERDB_KEY}`,
    },
    body: JSON.stringify({
      operation: 'insert',
      schema: 'dev',
      table: 'dog',
      records: [
        {
          id: 2,
          dog_name: 'Harper',
          owner_name: 'Stephen',
          breed_id: 346,
          age: 5,
          weight_lbs: 55,
          adorable: true,
        },
        {
          id: 3,
          dog_name: 'Alby',
          owner_name: 'Kaylan',
          breed_id: 348,
          age: 5,
          weight_lbs: 84,
          adorable: true,
        },
        {
          id: 4,
          dog_name: 'Billy',
          owner_name: 'Zach',
          breed_id: 347,
          age: 4,
          weight_lbs: 60,
          adorable: true,
        },
        {
          id: 5,
          dog_name: 'Rose Merry',
          owner_name: 'Zach',
          breed_id: 348,
          age: 6,
          weight_lbs: 15,
          adorable: true,
        },
        {
          id: 6,
          dog_name: 'Kato',
          owner_name: 'Kyle',
          breed_id: 351,
          age: 4,
          weight_lbs: 28,
          adorable: true,
        },
        {
          id: 7,
          dog_name: 'Simon',
          owner_name: 'Fred',
          breed_id: 349,
          age: 1,
          weight_lbs: 35,
          adorable: true,
        },
        {
          id: 8,
          dog_name: 'Gemma',
          owner_name: 'Stephen',
          breed_id: 350,
          age: 3,
          weight_lbs: 55,
          adorable: true,
        },
        {
          id: 9,
          dog_name: 'Gertrude',
          owner_name: 'Eli',
          breed_id: 158,
          age: 5,
          weight_lbs: 70,
          adorable: true,
        },
        {
          id: 10,
          dog_name: 'Big Louie',
          owner_name: 'Eli',
          breed_id: 241,
          age: 11,
          weight_lbs: 20,
          adorable: false,
        },
      ],
    }),
  });

  const data = await request.json();

  res.status(200).json({ data });
};
