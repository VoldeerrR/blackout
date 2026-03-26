#!/bin/bash

# Deploy script for the BLACKOUT project

# Define variables
CLIENT_DIR="./client"
SERVER_DIR="./server"
BUILD_DIR="./build"

# Build the client
echo "Building client..."
cd $CLIENT_DIR
npm install
npm run build

# Build the server
echo "Building server..."
cd ../$SERVER_DIR
npm install
npm run build

# Copy build files to the deployment directory
echo "Copying build files..."
mkdir -p $BUILD_DIR
cp -r $CLIENT_DIR/dist/* $BUILD_DIR/
cp -r $SERVER_DIR/dist/* $BUILD_DIR/

# Deploy to hosting service (example command, replace with actual deployment command)
echo "Deploying to hosting service..."
# Replace the following line with the actual deployment command
# deploy_command $BUILD_DIR

echo "Deployment completed!"