#!/bin/bash

# Ask if the user wants to update the code
read -p "Do you want to update the code? (y/n): " updateCodeConfirm
if [[ "$updateCodeConfirm" != "y" && "$updateCodeConfirm" != "Y" ]]; then
    echo "Update canceled."
    exit 0
fi

# Ask if the user wants to update the date in lastUpdated.txt
read -p "Do you want to update the date in lastUpdated.txt? (y/n): " updateDateConfirm
if [[ "$updateDateConfirm" == "y" || "$updateDateConfirm" == "Y" ]]; then

	# Specify the file path
	filePath="./src/.vuepress/public/lastUpdated.txt"

	# Get the current date in the desired format and write to the file
	date +"%Y年%m月%d日 %H:%M" > "$filePath"
	echo "Date updated in $filePath."
else
    echo "Date update skipped."
fi

# Check if the file has changed
if [ -n "$(git status --porcelain)" ]; then
    # Prompt the user for a commit message
    read -p "Enter commit message: " commitMessage

    # Stage the file
    git add .

    # Commit the changes with the user's message
    git commit -m "$commitMessage"

    # Push the changes to the remote repository
    git push wiki main
	echo "Changes have been pushed."
else
    echo "No changes to commit."
fi
