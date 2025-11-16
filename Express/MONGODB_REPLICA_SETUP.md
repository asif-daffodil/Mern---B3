# MongoDB Replica Set Setup for Prisma

## Steps to enable MongoDB Replica Set:

### Option 1: Using Command Line (Temporary - for testing)

1. Stop MongoDB service (Run PowerShell as Administrator):
   ```powershell
   net stop MongoDB
   ```

2. Start MongoDB with replica set enabled:
   ```powershell
   mongod --replSet rs0 --dbpath "C:\Program Files\MongoDB\Server\7.0\data" --port 27017
   ```

3. In another terminal, run the setup script:
   ```bash
   node setup-mongodb-replica.js
   ```

### Option 2: Modify MongoDB Configuration File (Permanent)

1. Find your MongoDB config file (usually at):
   - `C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg`
   - Or `C:\Program Files\MongoDB\Server\6.0\bin\mongod.cfg`

2. Open the file as Administrator in Notepad

3. Add or modify the replication section:
   ```yaml
   replication:
     replSetName: "rs0"
   ```

4. Restart MongoDB service (Run PowerShell as Administrator):
   ```powershell
   net stop MongoDB
   net start MongoDB
   ```

5. Initialize the replica set by running:
   ```bash
   node setup-mongodb-replica.js
   ```

### After Setup:

1. Update your `.env` file (already done):
   ```
   DATABASE_URL="mongodb://localhost:27017/mernb3"
   ```

2. Restart your Express server:
   ```bash
   npm run dev
   ```

3. Test your `/users` endpoint - it should work now!
