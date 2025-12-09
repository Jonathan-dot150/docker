#!/bin/bash

sudo apt install -y ufw
# autoriser SSH
sudo ufw allow OpenSSH

# ports Docker Swarm (manager <-> worker)
sudo ufw allow 2377/tcp   # swarm management
sudo ufw allow 7946/tcp   # overlay networking
sudo ufw allow 7946/udp
sudo ufw allow 4789/udp   # overlay vxlan

# ports pour registry et services exposés (adaptable)
sudo ufw allow 5000/tcp   # registry locale
sudo ufw allow 80/tcp     # HTTP (nginx)
sudo ufw allow 11434/tcp  # ollama
sudo ufw allow 5001/tcp   # others mapped port (dev)

sudo ufw --force enable
