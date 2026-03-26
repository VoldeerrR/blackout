import * as fs from 'fs';
import * as path from 'path';

// Define the output directory for the generated proto files
const outputDir = path.join(__dirname, '../../shared/src/proto');

// Define the protocol buffer definitions
const protoDefinitions = `
syntax = "proto3";

package blackout;

// Message for player actions
message PlayerAction {
  enum ActionType {
    MOVE = 0;
    SHOOT = 1;
    PLANT_BOMB = 2;
    DEFUSE_BOMB = 3;
  }
  ActionType action = 1;
  float x = 2;
  float y = 3;
}

// Message for game state updates
message GameState {
  repeated Player players = 1;
  repeated Bomb bombs = 2;
}

// Message for player information
message Player {
  string id = 1;
  string name = 2;
  int32 health = 3;
  bool isAlive = 4;
}

// Message for bomb information
message Bomb {
  bool isPlanted = 1;
  float timer = 2;
}
`;

// Function to generate the proto file
function generateProtoFile() {
  const filePath = path.join(outputDir, 'game.proto');
  
  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the proto definitions to the file
  fs.writeFileSync(filePath, protoDefinitions.trim());
  console.log(`Protocol buffer definitions generated at: ${filePath}`);
}

// Execute the function to generate the proto file
generateProtoFile();