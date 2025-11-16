// Run this script with: node setup-mongodb-replica.js
// This will connect to your MongoDB and initialize it as a replica set

const { MongoClient } = require('mongodb');

async function setupReplicaSet() {
  const client = new MongoClient('mongodb://localhost:27017/');
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const admin = client.db('admin');
    
    // Try to initiate replica set
    try {
      const result = await admin.command({
        replSetInitiate: {
          _id: 'rs0',
          members: [{ _id: 0, host: 'localhost:27017' }]
        }
      });
      console.log('Replica set initialized:', result);
    } catch (error) {
      if (error.message.includes('already initialized')) {
        console.log('Replica set already initialized');
      } else {
        console.error('Error initializing replica set:', error.message);
        console.log('\nYou need to restart MongoDB with --replSet rs0 flag');
        console.log('Or add to mongod.cfg:');
        console.log('replication:');
        console.log('  replSetName: "rs0"');
      }
    }
  } finally {
    await client.close();
  }
}

setupReplicaSet().catch(console.error);
