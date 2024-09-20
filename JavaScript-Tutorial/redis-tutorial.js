import { createClient } from 'redis';

async function nodeRedisDemo() {
  try {
    const client = createClient();
    await client.connect();

    // await client.set('mykey', 'Hello from node redis');
    // const myKeyValue = await client.get('mykey');
    // console.log(myKeyValue);


    const vehicles = [1, 2, 5, 7];
    console.log(vehicles);
    await client.set('vehicles', JSON.stringify(vehicles));
    const key = await client.get('vehicles');
    console.log(JSON.parse(key)[0]);
    console.log(typeof key);
    
    //console.log(`Added ${numAdded} items.`);

    // for await (const vehicle of client.zScanIterator('vehicles')) {
    //     console.log(`${vehicle}`);
    // }

    await client.quit();
  } catch (e) {
    console.error(e);
  }
}

nodeRedisDemo();