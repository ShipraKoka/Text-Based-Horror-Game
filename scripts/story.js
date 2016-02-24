var story = [
    {
        // chapter - Story text 
        // options - Option buttons text
        // option1 - steps to option1 chapter
        // option2 - steps to option2 chapter
        "chapter": "^2500I awoke. Dazed and surrounded by darkness. My head was spinning and there was a </br>sharp pain in the upper right side of my skull.  What am I doing here? \"Where is here?\" </br>I thought, First things first, orient myself. </br>I couldn't remember what had happened prior to my unconsciousness. I stood up and looked ahead. </br>There was a vague outline of a path that appeared to lead up to a house. I could barely make out an old mansion. </br>I looked behind myself and saw nothing but black. I heard what sounded like footsteps walking toward me from the rear.",
        "options": "^1000<br>WHAT DID I DO?</br> Option 1: INVESTIGATE THE FOOTSTEPS</br>Option 2: WALK TOWARD THE HOUSE </br>  ",
        "option1": 1,
        "option2": 2        
    },
    {
        // chapter - Story text
        // death - death scene identifier
        // previous - steps back to starting chapter
        "chapter": "I turned around and walked away from the house. A large figure walked toward me on the path. In its hand I saw what appeared to be an ax. \"Hello?\" I ventured. No response, just a quickened pace. Its arm lifted the weapon high into the air. I turned to run but I was too late. The ax brutally removed my head from its shoulders and this is the end of my story.",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "I made my way up to the house. It appeared to be old and in need of repairs. Regardless, it held a certain beauty.</br>There looked to be about four stories, each floor big enough to contain a large family. Something gleamed to my left on the path. I looked over and saw a hatchet.",
        "options": "<br>WHAT DID I DO?</br>Option 1: LEAVE THE HATCHET</br>Option 2: PICK UP THE HATCHET</br> ",
        "option1": 1,
        "option2": 4
    },
    {
        "chapter": "</br>I left the hatchet and continued on toward the house.</br>As I climbed the porch, the planks protested my presence through sharp whining. I reached for the door and heard rustling behind me. I swiveled my head and saw a dark figure hulking toward me. I couldn't make out its eyes but noticed an ax in its hand. I said, \"Hello?\"... No response. It then swung an ax in my direction and growled. I was in danger.",
        "options": "<br>WHAT DID I DO?</br>Option 1: ATTACK</br>Option 2: RUN</br> ",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "I ran at it, swinging my fists. It stopped me with ease through use of a sharpened ax. The last thing I saw was red on silver. And this is the end of my story.",
        "death": true,
        "previous": 2
    },
    {
        "chapter": "I attempted to run and heard a whoosh. The ax tore through the upper section of my spine. I could feel my shoulder blades separating. And this is the end of my story...",
        "death": true,
        "previous": 3
    },
    {
        "chapter": "<br>I picked the hatchet up and continued on toward the house. As I climbed the porch, the planks protested my presence through sharp whining. I reached for the door and heard rustling behind me. I swiveled my head and saw a dark figure hulking toward me. I couldn't make out its eyes but noticed an ax in its hand. I said, \"Hello?\"... No response. It then swung an ax in my direction and growled. I knew at this point I was in danger.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: ATTACK</br>Option 2: RUN</br> ",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<br>I ran at it, it swung an ax and I ducked. I lifted my hatchet into its throat. It let out a yowl and fell in a heap. It had ceased breathing and I picked up the ax.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: HEAD TOWARD THE HOUSE</br>Option 2: EXAMINE THE BODY</br> ",
        "option1": 2,
        "option2": 3
    },
    {
        "chapter": "<br>I attempted to run and heard a whoosh. The ax tore through the upper section of my spine. I could feel my shoulder blades separating. And this is the end of my story...",
        "death": true,
        "previous": 2
    },
    {
        "chapter": 'As I made my way back to the porch, I wondered why I was attacked and I was thankful for having a weapon. "Why is he trying to kill me?" I wondered.',
        "options": "",
        "option1": 2
    },
    {
        "chapter": 'I turned the face to view it. It was a man. He appeared dirty and unshaven. In his pocket, I found a picture...<br>The picture was of me! Underneath the photo was the word "KILL". "Well, that explains the ax," I muttered.<br>I made my way back to the porch, thankful I had weapons.',
        "options": "",
        "option1": 1

    },
    {
        "chapter": "<br>I reached the porch. I tried to open the front door but the door was locked. If I had tried running from my attacker earlier, I would have been met with a latched door. There was a window on the right and one on the left. I could hear more rustling in the distance.<br><br>WHAT DID I DO?<br>Option 1: OPEN A WINDOW<br>Option 2: STAY OUTSIDE THE HOUSE<br> ",
        "options": "<br><br>WHAT DID I DO?<br>Option 1: OPEN A WINDOW<br>Option 2: STAY OUTSIDE THE HOUSE<br> ",
        "option1": 2,
        "option2": 1
    },
    {
        "chapter": "<br>I stood on the porch with an ax and a hatchet.<br>A couple minutes passed and several large men with weapons of various assortments arrived at the porch.<br>I attempted to fight them off, regretting not having climbed through a window, but there were too many.<br>I couldn't tell you if it was blades or bludgeoning that killed me but this is the end of my story.",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "<br>There are two windows. Which window did I open?",
        "options": "<br>Option 1: OPEN THE LEFT WINDOW</br></br>Option 2: OPEN THE RIGHT WINDOW</br> ",
        "option1": 1,
        "option2": 1
    },
    {
        "chapter": "<p>I messed around with the window and it opened with no resistance. I climbed inside and shut the window behind me. For good measure, I locked both windows. I took a moment and viewed the room I was in. It was a large hall. Suddenly a memory flashed... I am an investigator. I was on a major case. What was that case about...? Bang! A loud noise from the next room over. Two doors. One door leading to the noise and another door leading away from it.</p>",
        "options": "<br>WHAT DID I DO?<br>Option 1: OPEN THE DOOR LEADING TOWARD THE NOISE<br>Option 2: GO THROUGH THE DOOR LEADING AWAY FROM THE NOISE<br> ",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<br><br>I bravely opened the door that led to the noise. The mystery was instantly solved. There stood a man with a large shotgun in his hands. He wasted no time in taking aim at my body. Not that aim mattered with a gun like that. I quickly threw my hatchet at him. He moved to the left but my hatchet cut his thigh. It delayed the shooter slightly but didn't stop him. He shot. The gun tore through my midsection and this is the end of my story.",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "<p>I scrambled away from the banging sound coming from the other door behind me. I passed through door in front of me and found myself in a large dining room. There were lit candles on a long dark wood table. The table was set but no food was present. I knew I had to leave this room because it was apparent someone had recently been here. There was a closet and other random furniture and items in the room. I then heard footsteps coming toward the door I had just entered through. There was a clicking sound which I likened to a shotgun being loaded.<br>",
        "options": "<br>WHAT DID I DO?<br>Option 1: HIDE UNDER THE TABLE<br>Option 2: HIDE IN THE CLOSET<br> ",
        "option1": 1,
        "option2": 1
    },
    {
        "chapter": "I hid and a man entered the room. He had a white shirt on with red stains. He wore a torn sack on his head and carried a double barreled shotgun. I held my breath. Lucky for me the man quickly stepped through the kitchen. He knocked over some chairs and arrived at a staircase and a door. He chose the door and exited the room. I waited until I no longer heard him. \"I need a gun\" I thought.",
        "options": "</br>WHAT DID I DO?</br>Option 1: GO UP THE STAIRS</br>Option 2: FOLLOW THE MAN WITH THE SHOTGUN</br> ",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I made my way up the staircase to what appeared to be the second floor of the house. There was a long hallway ahead of me. There was a table with a lit candle on it. I saw what looked to be a folder. There was a single sheet of lined paper on it. A scrawled quote was written, \"Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility.\" -Sigmund Freud \"Well that\'\'s a load of crap\" I thought to myself. I paused and contemplated my current situation. I had a fleeting thought, \"Maybe I should just burn this house down...\"",
        "options": "<br>WHAT DID I DO?<br>Option 1: USE THE CANDLE TO START A FIRE<br>Option 2: KEEP EXPLORING THE HALLWAY<br> ",
        "option1": 2,
        "option2": 3
    },
    {
        "chapter": "I opened the door. Despite my attempts to be quiet, it creaked loudly. I heard shouting and heavy footsteps. The man with the shotgun appeared and before I could defend myself, he blew my head off with a hail of bullets. And this is the end of my story.",
        "death": true,
        "previous": 2
    },
    {
        "chapter": "<br>I lit the paper on fire and threw it on the floor. I then used the candle to light the wallpaper on fire. <br>It was peeling and dry and made for highly flammable material. The house began to burn. I made my way away from the fire and hit a locked door at the end of the hallway. <br> I turned back to pass through the fire but it was too large. I was trapped. I tried to run through the fire but it burned me.<br>I ran back to the door and tried to kick it in, to no avail. There was no escaping. My choice ended up in my body being burnt alive. <br>A terrible, overly long experience of the most unimaginable pain. And this is the end of my story.",
        "death": true,
        "previous": 2
    },
    {
        "chapter": '"Yeah, I shouldn\'t start a fire", I thought as I walked forward. First I heard a lock click at the end of the hallway and then I heard a shrill scream. It sounded like a woman yelling from behind the door. "Help!! He\'s going to kill me!"',
        "options": "<br>WHAT DID I DO?</br>Option 1: RESCUE THE WOMAN</br>Option 2: LEAVE HER</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I boldly opened the door. I saw a woman. There was a man with a sledge hammer walking toward her aggressively. The woman had blonde hair and her face had some blood on it. She was my age and looked terrified. \"Hey!\" I yelled at the man, \"Leave her alone!\" The man was in stained overalls and had no shoes on. He turned his attention to me and headed my way. I gripped my ax and hatchet tightly in each hand. The man swung his sledgehammer at me, I quickly ducked and thrust my ax deep into his chin. The man grunted and fell to the ground.</p>",
        "options": "<br>WHAT DID I DO?</br>Option 1: TALK WITH THE WOMAN</br>Option 2: INSPECT THE BODY</br>",
        "option1": 2,
        "option2": 3
    },
    {
        "chapter": "I turned around and ran away from her voice. I heard a crushing sound accompanied with a final scream, followed by silence. I continued running, I reached the stairs, headed down and hit the dining room. I was met with five people in red, priest-like robes. I stopped short. They were holding swords. I yelled at them \"What the hell is going on here?!\" And I turned around again. I ran straight into a man with no shirt. He was completely bald and holding an ax. I swung at him with my hatchet and he hit my wrist. My hatchet dropped. I raised my ax but wasn\'\'t fast enough. His ax came down right in the top center of my head. And this is the end of my story.",
        "death": true,
        "previous": 2
    },
    {
        "chapter": "<p>I asked the woman, \"How did you end up here and what the hell is going on?\" She stared at me, she looked half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'\'t remember how I got here. This place is full of psychotics who seem to want to murder us.\" She said.  \"What\'\'s your name?\" \"My name is " + name + "</br>\"Hello, " + name + ", my name is Jessica.\" She replied.</br>\"I also don''t know how I ended up here. People have been trying to kill me. And some even have pictures of me with \"KILL\" written on it.\" Jessica responded with, \"We should get out of here together.\"</br>\"Can I trust her?\" I thought to myself.</p>",
        "options": "<br>WHAT DID I DO?</br>Option 1: YES, LEAVE WITH THE WOMAN</br>Option 2: NO, LEAVE HER BEHIND</br>",
        "option1": 3,
        "option2": 5
    },
    {
        "chapter": "The woman watched me from the corner of the room. I searched the man's pockets. A picture of me with KILL written on it. I also found prescription psychotropic pills. </br>I asked the woman, \"How did you end up here and what the hell is going on?\" She stared at me, she looked half angry and half exhausted. \"Same question to you. Thank you for saving me though. I don\'\'t remember how I got here. This place is full of psychotics who seem to want to murder us.\" She said.",
        "options": "<br>WHAT DID I DO?</br>Option 1: TALK MORE WITH THE WOMAN</br>Option 2: LEAVE THE ROOM</br>",
        "option1": 2,
        "option2": 1
    },
    {
        "chapter": "I left the woman and re-entered the hallway I had come from. I walked right into a large man. He grinned and then everything went black.The last thing I felt was explosive pain on the top of my head and this is the end of my story.",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "<p>\"What\'s your name?\" she asked. \"My name is "+name+". I replied. \"Hello, " +name+ ", my name is Jessica.\" She replied.</br>\"I also don\'t know how I ended up here. People have been trying to kill me. And some even have pictures of me with \"KILL\" written on it.\" Jessica responded with, \"We should get out of here together.\"</br>\"Can I trust her?\" I thought to myself.</p>",
        "options": "<br>WHAT DID I DO?</br>Option 1: YES, LEAVE WITH THE WOMAN</br>Option 2: NO, LEAVE HER BEHIND</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>\"Okay. I\'ll leave with you. But who are you?\" I asked, \"I don\'\'t know the first thing about you.\" \"I woke up in here. Last thing I remember is being at work and-\" she began.</br>\"Shhhh!\" I snapped. I heard footsteps approaching the door...\'</p>",
        "options": "<br>WHAT DID I DO?</br>Option 1: GIVE JESSICA MY HATCHET</br>Option 2: KEEP BOTH WEAPONS TO MYSELF</br>",
        "option1": 2,
        "option2": 3
    },
    {
        "chapter": "<p>\"No, I\'m heading out alone. You\'\'ll only be a burden.\" I said. The woman glared and said, \"I\'m sorry. But we are not separating. You just saved my life and both of our chances of survival are increased by my coming with you.\" I looked at her, considered arguing but she looked determined. I gave up.</br>\"Okay. I\'ll leave with you. But who are you?\" I asked, \"I don''t know the first thing about you.\" \"I woke up in here,\" she began. \"The last thing I remember is being at work and-\"</br>\"Shhhh!\" I snapped. I heard footsteps approaching the door...</p>",
        "options": "<br>WHAT DID I DO?</br>Option 1: GIVE JESSICA MY HATCHET</br>Option 2: KEEP BOTH WEAPONS TO MYSELF</br>",
        "option1": 1,
        "option2": 3
    },
    {
        "chapter": "<p>I threw my hatchet on the floor near Jessica and said, \"Take this.\" A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand. Jessica was near him. He didn\'t notice her.</p>",
        "options": "<br>WHAT DID I DO?<br>Option 1: DODGE HIM<br>Option 2: ATTACK HIM<br>",
        "option1": 3,
        "option2": 4
    },
    {
        "chapter": "<p>A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand.Jessica was near him. He didn\'t notice her. She jumped on his back. He aimed his gun at me and pulled the trigger. And this is the end of my story.</p>",
        "death": true,
        "previous": 3
    },
    {
        "chapter": "<p>A man burst in the room. He had what appeared to be a red priest\'s robe on and he held a large pistol in his hand.Jessica was near him. He didn\'t notice her. She jumped on his back. He aimed his gun at me and pulled the trigger. And this is the end of my story.</p>",
        "death": true,
        "previous": 3
    },
    {
        "chapter": 'I moved backward. He took careful aim at my head and - crunch! Jessica\'s hatchet sunk into the back of his head, killing him instantly. She stared at me for a couple seconds. I walked over and picked up the pistol. I checked it, it was loaded and appeared to hold six bullets. "Well done," I said. "Now let\'s get out of here."',
        "options": "<br>WHAT DID I DO?<br>Option 1: EXPLORE THE BACK OF THE ROOM<br>Option 2: HEAD OUT THE DOOR I CAME IN<br>",
        "option1": 3,
        "option2": 2
    },
    {
        "chapter": "<p>I ran toward the man. Jessica jumped on his back. He struggled and aimed his gun at me. He pulled the trigger and this is the end of my story.</p>",
        "death": true,
        "previous": 3
    },
    {
        "chapter": "<p>Jessica and I went out the door. In the hallway was a crowd of men, wearing similar red robes to the man with the pistol. I immediately began firing my pistol but there was a problem; they had guns too. And this is the end of my story.</p>",
        "death": true,
        "previous": 2
    },
    {
        "chapter": "We headed to the back of the room. Jessica found a flashlight. There was a small doorway. I opened it and saw a staircase leading up. It was dark. I decided to cover our path, so I moved a bookshelf in front of the door. I left enough room for us to squeeze in. I shut the door behind us.",
        "options": "<br>WHAT DID I DO?<br>Option 1: HEAD UP FIRST<br>Option 2: HAVE JESSICA LEAD<br>Hit 1 or 2",
        "option1": 1,
        "option2": 1
    },
    {
        "chapter": "We headed up. The stairs creaked. There were spiderwebs and it smelled like rotted wood. Ahead of us there was a skittering sound. Jessica gasped. I put my hand on her mouth and whispered for her to be quiet. Her skin was ice cold. I grabbed the flashlight and told Jessica to stay where she was. I walked ahead and reached the top of the stairs. We were in a library. The books were covered in dust and cobwebs. They appeared to be on a variety of subjects. I looked up and saw large spikes hanging from the ceiling. Very odd. I then panned the flashlight left to right and stopped my flashlight on a body.",
        "options": "<br>WHAT DID I DO?<br>Option 1: INSPECT THE BOOKS<br>Option 2: INSPECT THE BODY<br>Hit 1 or 2",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I called Jessica over. We walked over to the books. I picked one up. It was then I realized that the book triggered the spikes. Faster than I could react, the spikes fell from the ceiling. Jessica and I were impaled from above and this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": 'I called Jessica over. This time she didn\'t gasp. We walked over to the body. It was on a metal table - out of space in the library. The body was a dead man. It appeared the top of his head and shoulders had been impaled. The corpse held a book in its hand - "Boy" by Roald Dahl. Blood dripped from the table onto the floor. There was a bloodied note next to the body.',
        "options": "WHAT DID I DO?</br>Option 1: HEAD TOWARD THE UNEXPLORED DOOR</br>Option 2: GO BACK FROM WHERE WE CAME</br>",
        "option1": 2,
        "option2": 1
    },
    {
        "chapter": "<p>We headed back toward the staircase we came in on. We got to the top of the stairs and began walking down. A man burst through the door at the bottom of the staircase and shot at us. I caught three bullets and saw Jessica go down as well. And this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "<p>We ran toward the doorway on the opposite side of the room from where we came in. There was a crash and footsteps up the stairway we had been on moments before. Hooded men entered the room with weapons leveled.' </p>",
        "options": "</br>WHAT DID I DO?</br>Option 1: GO FOR THE DOOR</br>Option 2: GRAB A BOOK</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I ran toward the door and was shot in the back. I saw Jessica go down as well. A bullet had torn through her head. I felt an unbearable pain and burning in my lower back. I grabbed a book, the spikes came down. I figured if I was going, I was taking them with me. And this is the end of my story. </p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "<p>Against my better judgement, I grabbed a book off the shelf and dove toward the door. Jessica was slightly ahead of me. The spikes on the ceiling came down swiftly. There was terrible screaming and then silence. We barely made it out from under the deadly spikes and got through the door. We were alive. I turned back to find the group of men behind us stabbed to death from the spikes. The spikes slowly rose back to the ceiling. And seven dead bodies fell to the floor. A floor saturated with red.",
        "options": "</br>WHAT DID I DO?</br>Option 1: CHECK OUT THE ROOM</br>Option 2: TALK TO JESSICA</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed an unventured door behind her. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole. </p>",
        "options": "<br>WHAT DID I DO?</br>Option 1: OPEN THE DOOR</br>Option 2: TALK TO JESSICA</br>",
        "option1": 4,
        "option2": 1
    },
    {
        "chapter": "\"This is utter madness.\" I said. \"It\'s like we\'re inside an unreal horror movie.\" \"We need to get away - call the police,\" Jessica said. \"Why are these psychotic people trying to kill us?\" I asked. \"And how did you get here?\" Jessica responded, \"I was in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up; I managed my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiled. A smile - shockingly out-of-place in this nightmare.",
        "options": "</br>WHAT DID I DO?</br>Option 1: SCAN THE ROOM</br>Option 2: SEARCH FOR A DOOR OUT</br>",
        "option1": 2,
        "option2": 2
    },
    {
        "chapter": "\"This is utter madness.\" I said. \"It\'s like we\'re inside an unreal horror movie.\" \"We need to get away - call the police,\" Jessica said. \"Why are these psychotic people trying to kill us?\" I asked. \"And how did you get here?\" Jessica responded, \"I was in college. I work part-time as a waitress. The last thing I remember was being at work. I woke up in that room minutes before you arrived. I was tied up; I managed my way out of the ropes just as a man entered the room. You came in after, saving me.\" She smiled. A smile - shockingly out-of-place in this nightmare.",
        "options": "",
        "option1": 2
    },
    {
        "chapter": "I scanned the room we found ourselves in. It was small and seemed to only serve as a passage from the library to whatever lay beyond. I looked at Jessica and noticed an unventured door behind here. I stared off in space and thought about how I had killed around ten people since arriving in this hellhole.",
        "options": "",
        "option1": 1
    },
    {
        "chapter": "<br><br>We entered the door and what I saw shocked me. A brand-new, stainless steel labratory was in front of us. It was exceptionally bright and vast. I immediately saw a doctor operating on someone. There were two individuals in white surrounding him. Everyone was staring at Jessica and I. And they were smiling. The corners of their mouths were sewn upwards. The stitches held a permanent, forced smile on their cheeks. They also had blood on their hands and the front of their clothes.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: IGNORE THEM</br>Option 2: TALK WITH THEM</br>",
        "option1": 1,
        "option2": 3
    },
    {
        "chapter": "<p>Due to their utter creepiness, I ignored the group. I walked around the other side of the room. Looking for an exit. I then noticed it. The only exit was by the surgical team. They were still staring. Hands moving as they performed the action of surgery - smiling right at us. I had no choice but to confront them...</p>",
        "options": "<br>WHAT DID I DO?</br>Option 1: ATTACK THEM</br>Option 2: TALK WITH THEM</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I pulled out my pistol and methodically shot the three of them. Boom, boom, boom. Three head shots. I heard a bang from behind me and turned just as I felt a crushing blow on the left side of my head. I couldn't make out my attacker and this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": 'I walked closer and asked the surgeon, "What happened to your face?" He stared at me, making odd sounds. Jessica screamed! "They have no tongues!" She was right, none of these individuals had tongues. "What the..." I said and I looked down at the patient they were operating on. His brain was exposed. It appeared they were performing a surgery. But I noticed the patient wasn\'t breathing. He also stunk. "He\'s dead. Why are you operating on a corpse?" The surgeon\'s eyes flashed and he pointed at the door behind him. His assistants stood staring. It was evident they wanted us to leave...<br>',
        "options": "",
        "option1": 1
    },
    {
        "chapter": "<br>I opened the door, let Jessica in and shut it behind us. I then locked it. Glad to be away from that room. \"This is a nightmare,\" I said. Jessica fell to the floor and rested against the wall. I sat next to her. She was shaking. \"What...is...happening...here?\" She trembled. \"I\'ve never heard of or seen such filth and such deplorableness...\" She asked me, \"What were those people doing? Why were they mauled?\" I looked at her and tried to think of something comforting to say. But nothing intelligent entered my mind. I sat, confused and upset.",
        "options": "</br>WHAT DID I DO?</br>Option 1: SIT IN SILENCE</br>Option 2: TALK WITH JESSICA</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I looked around the room we were in. It was small and undecorated. It was wild to me that this \'house\' had so many elements. It didn't mesh well; a library, an old-fashioned dining room, a labratory... I still didn't know where I was or how I got here exactly. I looked up and checked out the room we were in. </p>",
        "options": "</br>WHAT DID I DO?</br>Option 1: ENTER THE ROOM WITH THE BREEZE</br>Option 2: ENTER THE DOOR WITH THE LIGHT</br>",
        "option1": 3,
        "option2": 2
    },
    {
        "chapter": "<p>\"Look Jessica,\" I said. \"I have no idea what\'s going on in this place. I\'ve never experienced anything remotely like this. Do you know how you got here?\" \"The last memory I had was being at work,\" she answered, \"And then I awoke on a path outside this house. I don\'t know how or why I arrived here. I\'m just trying to stay alive. .I acknowledged her. I wanted to find out more but knew that we couldn\'t sit here any longer.</p>",
        "options": "</br>WHAT DID I DO?</br>Option 1: ENTER THE ROOM WITH THE BREEZE</br>Option 2: ENTER THE DOOR WITH THE LIGHT</br>",
        "option1": 2,
        "option2": 1
    },
    {
        "chapter": "</br>I stood up, grabbed Jessica\'s hand and lifted her to a standing position. We walked to the door and opened it. It was a mistake. In front of us was a large conference table with about 30 people at it. They held an assortment of weapons. I mustered my words and began saying, \"Please don\'t kill-\" and this is the end of my story.",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "<p>I stood up, grabbed Jessica's hand and lifted her to a standing position. We walked to the door and opened it. I blinked. We were outside! I scanned the area. Wait... We were outside but we weren't outside. We were in an outdoor corridor. To my left was the exterior of the house, to my right was a 15 foot tall fence with brutal spikes at the top and in front of us was a path that appeared to lead to another door. </p>",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: CLIMB THE FENCE</br>Option 2: TAKE THE PATH TO THE DOOR</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I walked over the fence and gripped the bars. \"Are you sure that\'s a good idea?\" Jessica asked. She eyed the spikes at the top. \"I\'m a good climber.\" I replied. \"I\'ll figure something out.\" \"Okay,\" she said. \"But I can\'t climb it, so what happens when you get over?\" \"I said I\'d figure it out!\" I snapped back. I handed her my pistol and began making my way up the fence. The bars were slightly rusted, which helped my grip. I made it to the top, sweating and out of breath. I reached over the spikes and pulled. I slipped and fell forward. I heard Jessica yell and then felt the rusted spikes impale my throat and upper body. And this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": 'Jessica breathed a sigh of relief. \"Thank goodness you\'re not going to climb that fence. That would be a death wish!\" I chuckled. We made our way down the dark path, gravel crunching under our feet. I reached the door and turned the handle. It was locked.',
        "options": "<br><br>WHAT DID I DO?</br>Option 1: LOOK FOR THE KEY</br>Option 2: KICK THE DOOR DOWN</br>",
        "option1": 2,
        "option2": 1
    },
    {
        "chapter": "<p>\"I have always wanted to do this,\" I said to Jessica. She grinned. I lifted my leg and kicked the door. Bang! It cracked near the handle but didn''t give. I lifted my leg for a second blow and heard a noise behind us. The door we had entered from opened. I turned to see a crowd of people pouring out. \"They heard us!\" Jessica yelled. She held her hatchet up and I pulled out my pistol. We didn\'t stand a chance, we were outmanned and outgunned. The last thing I saw was a barrel of a shotgun and this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "\"Jessica, help me find the key.\" I looked on the path. Jessica lifted the door mat and what do you know? There was a key. It was an old-fashioned, large fancy-looking key. \"You\'re welcome,\" she winked as she handed it to me. I tried it and it worked! The door clicked and opened. Immediately something jumped on top of me and knocked me on my back.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: CALL FOR HELP</br>Option 2: ATTACK WHATEVER WAS ON TOP OF ME</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "I yelled for Jessica. She swung her hatchet, there was a shrill yelp and blood splattered across my face. I quickly wiped my eyes and stood to my feet, pistol at the ready. On the floor, there was a dead dog, half of its neck sliced through. It was a wolf-like dog, large and, by all appearances, hungry. \"Really?\" I asked. \"Crazy people and now a killer dog...\" I looked to Jessica, she was panting and her hatchet dripped. \"Thank you.\" She nodded in response. In the corner there was a set of television screens. \"I think it\'s a security system.\" I said to Jessica and myself.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: TURN THE SCREENS ON?</br>Option 2: LEAVE THEM BE?</br>",
        "option1": 3,
        "option2": 2
    },
    {
        "chapter": "I pushed my hands against the heavy attacker. Jessica swung her hatchet, there was a shrill yelp and blood splattered across my face. I quickly wiped my eyes and stood to my feet, pistol at the ready. On the floor, there was a dead dog, half of its neck sliced through. It was a wolf-like dog, large and, by all appearances, hungry. \"Really?\" I asked. \"Crazy people and now a killer dog...\" I looked to Jessica, she was panting and her hatchet dripped. \"Thank you.\" She nodded in response. In the corner there was a set of television screens. \"I think it\'s a security system.\" I said to Jessica and myself.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: TURN THE SCREENS ON?</br>Option 2: LEAVE THEM BE?</br>",
        "option1": 2,
        "option2": 1
    },
    {
        "chapter": "<p>I didn\'t turn on security camera screens. Jessica and I scanned the room. I searched a nearby bookcase. There were books on human anatomy and neurology. I picked up one entitled \"Brains and Minds\" and flipped through. There were diagrams of different section of the brains indicating where to cut to supposedly affect behavior. \"Jessica, you have to see -\" I turned my head and saw Jessica being held from behind by a tall man. How did I not hear him? He had a knife to her throat. I raised my weapon and while staring directly at me, the man ran the knife through the front of her neck. Jessica died. I took my ax and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. And this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "I turned the security system screens on. There were eight screens. I could see some areas where we had been and a couple we had not. Suddenly there was a tall figure on one of the screens. He was coming up the path we had just walked on. He held a long butcher\'s knife in his right hand. I couldn\'t make out his face. \"Jessica!\" I hissed, \"Someone\'s coming.\"",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: HIDE</br>Option 2: PREPARE TO ATTACK</br>",
        "option1": 2,
        "option2": 1
    },
    {
        "chapter": "<p>I took my ax, smashed opened the closet doors and charged at him. He made an attempt to stab me but I dodged and brought my ax down on his head. Two more men entered the room and before I could react they shot me in the back. And this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "My heart raced. I hoped he wouldn't hear it pounding. After what was merely two seconds but seemed like an eternity he continued walking. He finished his circle of the room. He paused at the door he came in. Glanced back over toward our closet. And then he left the room. Jessica and I simultaneously breathed sighs of relief. We exited the closet.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: LOOK AT SECURITY SCREENS AGAIN</br>Option 2: SEARCH THE ROOM</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "I took a look at the security cameras again. Behind us, in the path we came from there was huddle of men. There were three of them and they appeared to be talking and pointing. The screens showed that the room ahead of us had no one in it but contained several coffins!",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: MOVE BACKWARD</br>Option 2: MOVE FORWARD</br>",
        "option1": 2,
        "option2": 3
    },
    {
        "chapter": "I glanced around the room and saw nothing of interest. So I took a look at the security cameras again. Behind us, in the path we came from there was huddle of men. There were three of them and they appeared to be talking and pointing. The screens showed that the room ahead of us had no one in it but contained several coffins!",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: MOVE BACKWARD</br>Option 2: MOVE FORWARD</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>I readied my gun, opened the door and opened fire on the three men. Bam! One down. Bam! Another down. The third one had made his way close to me and grabbed for the gun. There was a struggle. He was twice my size and overpowered me. Bam! A shot went off. I heard a noise. Jessica had fallen to the ground - blood rushing out of her head. And then... Bam! And this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": 'Jessica and I opened the door and made our way into the coffined room. It was rancid. The floor was concrete and the walls and ceiling were stone. Each coffin was numbered with gold lettering; 1-17. Jessica eyed the room with her hand on her face. On one of the walls I saw what looked to be hand-smeared blood. The blood messily spelled out three sets of numbers; "3" "17" "5"...',
        "options": "<br><br>WHAT DID I DO?</br>Option 1: CONTINUE CHECKING THE ROOM</br>Option 2: OPEN A COFFIN</br>",
        "option1": 1,
        "option2": 3
    },
    {
        "chapter": 'I looked over the walls and it looked like we were in a dead end (no pun intended). The only door in the room was the one we entered through. Jessica ran her hand against the wall. "It\'s damp," she said.',
        "options": "<br><br>WHAT DID I DO?</br>Option 1: LEAVE THROUGH THE DOOR I ENTERED</br>Option 2: OPEN A COFFIN</br>",
        "option1": 1,
        "option2": 2
    },
    {
        "chapter": "<p>Because we couldn't find a way, Jessica and I left the room the way we came in. And it seemed the three men we had seen earlier on the security displays had caught up with us. Jessica jumped in front of me swinging her hatchet. She didn't stand a chance. The last thing I saw was the barrel of a gun. And this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "</br>I decided to open one of the caskets. Hopefully there was nothing inside...",
        "coffin1": true        
    },
    {
        "chapter": "<p>I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...and this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "</br>I decided to open one of the caskets. Hopefully there was nothing inside...",
        "coffin2": true
    },
    {
        "chapter": "<p>I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...and this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "</br>I decided to open one of the caskets. Hopefully there was nothing inside...",
        "coffin3": true
    },
    {
        "chapter": "<p>I reached down and opened the lid. There was a bright flash and explosion. I briefly could feel my flesh burning, then I thought of Jessica...and this is the end of my story.</p>",
        "death": true,
        "previous": 1
    },
    {
        "chapter": "</br>I opened the coffin with the gold letter 5 on top. The floor began to shake. Dust fell from the walls and ceiling. Step by step, a rough staircase began to form. Jessica grabbed me and pulled me back. It was extremely loud and I glanced at the door, convinced that we would be heard.",
        "options": "<br><br>WHAT DID I DO?</br>Option 1: BLOCK THE DOOR WITH A COFFIN</br>Option 2: HIDE IN A COFFIN</br>",
        "option1": 1,
        "option2": 2
    },


];

