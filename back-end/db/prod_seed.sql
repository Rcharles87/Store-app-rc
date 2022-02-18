\c pins_dev;

INSERT INTO pins ( name, description, price, is_featured, image  ) VALUES
('GiR Pin', 'GiR from invader zim hugging is favorite toy', 10, true, "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image" ),
('Zim Pin', 'Everyones favorite space invader... We dont talk about marvin', 8, true, "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"),
('P-Valley Pin', 'ask for uncle cliiford at the door', 15, true, "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"),
('Trippy Rick Pin', 'whats better then a rick with his head in the clouds', 12, true, "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"),
('Trippy Morty Pin', 'SEE RICK for the question', 12, true, "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image")

INSERT INTO reviews (pin_id, reviewer, title, content, rating)
VALUES
('1', 'Sam', 'Cutest Thing EVER!!!', 'love the design its sooo adorble.', 5),
('2', 'Christina', 'Small', 'i expected the pin to be bigger.', 3),
('3', 'Hannah', 'OMG!!!!', 'I freaking love this show.', 5),
('4', 'James', 'Dope', 'I feel like this was made for me.', 4),
('4', 'Hector', 'Broh', 'WUBBA LUBBA DUB DUB!!!!!', 5 ),
('5', 'Hector', 'awww jeeze', 'Best morty pin ever rick.', 5),
('1', 'Laiba', 'Used to love this show', 'Hes so cute 😍', 5),
('1', 'Jenna', 'First not last...', 'Going to be buying from here again stuff is adorbs', 5)