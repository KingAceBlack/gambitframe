/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
   
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'


// Define the enemy object
let player = {
  name: 'player',
  life: 100,
  power: 15,
};

// Define the enemy object
let enemy1 = {
  name: 'Enemy 1',
  life: 80,
  power: 5,
 
};






// Define the Health variable outside of the app.frame() function
//let Health = 100;

app.frame('/', (c) => {

  player = { ...player, life: 100 };
  enemy1 = { ...enemy1, life: 80 };

  return c.res({

    //action:'/attackone',
    image : 'https://gateway.pinata.cloud/ipfs/QmYiKh1udqdv9pmqxtZEuNq9QwmupCKKb4rLYyTVLMdiuD',
    //image : 'https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif',
    
    intents: [
     
      <Button action="/explore">Explore</Button>,
     
     
    ],
  }) 

});

// Example of changing the Health variable later in the code
//Health = 80;

app.frame('/explore', (c) => {
  
  return c.res({
    //action:'/attackone',
    image : 'https://gateway.pinata.cloud/ipfs/QmVdB5P3wAXchawzidSuen31iBYR9kuA65a6fFTaJFuifJ',
    
    intents: [
     
      <Button action="/encounter">Investigate</Button>,<Button action="/treasure">Flee</Button>,
     
     
    ],
  })
})

app.frame('/treasure', (c) => {
  
  return c.res({
    //action:'/attackone',
    image : 'https://gateway.pinata.cloud/ipfs/QmauQ7poYgNzvPZi2HFYtVsM7wmyrV6r8Fcmj9jydvFth1',
    
    intents: [
     
      <Button action="/encounter">Investigate</Button>,
     
     
    ],
  })
})

app.frame('/encounter', (c) => {
  
  return c.res({
    //action:'/attackone',
    image : 'https://gateway.pinata.cloud/ipfs/QmdJbGezB9etGzYtKBZErRkKrfebWTy3H7WBHBZ7upXaMx',
    
    intents: [
     
      <Button action="/preparefight">Fight</Button>,<Button action="/death">Flee</Button>,
     
     
    ],
  })
})

app.frame('/preparefight', (c) => {
  
  return c.res({
    //action:'/attackone',
    image : 'https://gateway.pinata.cloud/ipfs/QmaGYm3Fvm7uw1pXKPt1KZDayhz2siDoryQCXuz3spJoAa',
    
    intents: [
     
      <Button action="/fight">Attack</Button>,
     
     
    ],
  })
})


app.frame('/fight', (c) => {
 
  return c.res({
    //action:'/fourth',
    image : 'https://gateway.pinata.cloud/ipfs/QmUjGTqCxncqK29qzyXPNhvw3NxayqsxBK22NhpD9Pgij1',
    
    intents: [
     
      <Button action="/heavyhit">Heavy Attack</Button>,<Button action="/lighthit">Light Attack</Button>,
     
     
    ],
  })
})

app.frame('/heavyhit', (c) => {

   const randomNum = Math.floor(Math.random() * 5);

  // Initialize damage variable
  let damage;

  // Assign damage based on random number
  if (randomNum === 0) {
    damage = 0; // no damage
  } else if (randomNum === 1) {
    damage = 0; // no damage
  } else {
    damage = 25; // 30 damage
  }

  // Reduce enemy1's life by damage
  enemy1.life -= damage;
  
  // Initialize variables for image and intents
  let image, intents;

  if (damage > 0 ) {

     // Check if enemy1's life is greater than 0
      if (enemy1.life > 0) {
        // Set image and intents for when enemy1's life is greater than 0
        image = 'https://gateway.pinata.cloud/ipfs/QmSqviok23veYiiSDxW2vt5Lx9PEhvSuQNY4GqWWCinKxD';
        intents = [<Button action="/enemyturn">Continue</Button>];
      } else {
        // Set image and intents for when enemy1's life is 0 or less
        image = 'https://gateway.pinata.cloud/ipfs/QmSeh4Q3UQ7AaPb4VSTnuoSWhvCR3cmXXVwhs4WaezPLBt';
        intents = [<Button action="/enemyturn">Continue</Button>];
      }


  }else {

      image = 'https://gateway.pinata.cloud/ipfs/Qme93TPkjBZ5cZs71FQpCv4e4HwDVSdeSybfAv8e7ng21y';
      intents = [<Button action="/enemyturn">Continue</Button>];

  }

 
  // Return the response object
  return c.res({
    image: image,
    intents: intents
  });
});



app.frame('/lighthit', (c) => {

  const randomNum = Math.floor(Math.random() * 7);

  // Initialize damage variable
  let damage;

  // Assign damage based on random number
  if (randomNum === 0) {
    damage = 0; // no damage
  } else if (randomNum === 1) {
    damage = 15; // 25 damage
  } else {
    damage = 15; // 30 damage
  }

  // Reduce enemy1's life by damage
  enemy1.life -= damage;
  
  // Initialize variables for image and intents
  let image, intents;

    if (damage > 0 ) {

        // Check if enemy1's life is greater than 0
        if (enemy1.life > 0) {
          // Set image and intents for when enemy1's life is greater than 0
          image = 'https://gateway.pinata.cloud/ipfs/QmdGxFDQvPCbomCxKojHExTXDx4tJpGxjBP5XwbHygZq3f';
          intents = [<Button action="/enemyturn">Continue</Button>];
        } else {
          // Set image and intents for when enemy1's life is 0 or less
          image = 'https://gateway.pinata.cloud/ipfs/QmSeh4Q3UQ7AaPb4VSTnuoSWhvCR3cmXXVwhs4WaezPLBt';
          intents = [<Button action="/enemyturn">Continue</Button>];
        }

    }else {

        image = 'https://gateway.pinata.cloud/ipfs/Qmd68dadhhSKDY23rGFdruqfnQiuj5WYmjVbGcRc6r34TC';
        intents = [<Button action="/enemyturn">Continue</Button>];

    }

      

  // Return the response object
  return c.res({
    image: image,
    intents: intents
  });
});




app.frame('/enemyturn', (c) => {
  
  
  
  // Initialize variables for image and intents
  let image, intents;

  // Check if enemy1's life is greater than 0
  if (enemy1.life > 0) {
    // Set image and intents for when enemy1's life is greater than 0
    image = 'https://gateway.pinata.cloud/ipfs/QmcZWGot5aaNakUhMFF2zgU1tyXAVCqcxcr8eKMp7gF23K';
    intents = [<Button action="/enemyattackdodge">Dodge</Button>,<Button action="/enemyattackcounter">Counter</Button>];
  } else {
    // Set image and intents for when enemy1's life is 0 or less
    //vict0ry
    image = 'https://gateway.pinata.cloud/ipfs/QmY9forFd2xeFNXAK6N6c1f7vZATy3GMGjKwBPDU32UxSi';
    intents = [<Button action="/">Continue</Button>];
  }

  // Return the response object
  return c.res({
    image: image,
    intents: intents
  });
});





app.frame('/enemyattackdodge', (c) => {
  const randomNum = Math.floor(Math.random() * 4);

  // Initialize enemy damage variable
  let enemydamage;

  // Assign enemy damage based on random number
  if (randomNum === 0) {
    enemydamage = 20; // 20 damage
  } else if (randomNum === 1) {
    enemydamage = 20; // 20 damage
  } else {
    enemydamage = 0; // no damage
  }

  // Initialize variables for image and intents
  let image, intents;

  // Check if enemy damage is greater than zero
  if (enemydamage > 0) {
    // Subtract enemy damage from player's life
    player.life -= enemydamage;

    // Set image and intents for when enemy damage is greater than zero
    image = 'https://gateway.pinata.cloud/ipfs/QmRfM9uhmybSmkAqepvj1mCFjB6PzrRqhQcosE3HSVGdgs';
    intents = [<Button action="/fight">Continue</Button>];
  } else {
    // Set image and intents for when enemy damage is zero
    image = 'https://gateway.pinata.cloud/ipfs/QmeMp1WCywz47D24qthG5T4fTzRE8HUkua6bnzBWovHogK';
    intents = [<Button action="/fight">Continue</Button>];
  }

  // Check if player's life is 0 or less (player death)
  if (player.life <= 0) {
    // Set image and intents for player death
    image = 'https://gateway.pinata.cloud/ipfs/Qmc5GbL95RbCd5rSA6nzf6p6AspWmdvMVY97wMvAEeNuFy';
    intents = [<Button action="/gameover">Continue</Button>];
  }

  // Return the response object
  return c.res({
    image: image,
    intents: intents
  });
});



app.frame('/enemyattackcounter', (c) => {
  const randomNum = Math.floor(Math.random() * 3);

  // Initialize enemy damage variable
  let enemydamage;

  // Assign enemy damage based on random number
  if (randomNum === 0) {
    enemydamage = 0; // no damage
  } else if (randomNum === 1) {
    enemydamage = 20; // 20 damage
  } else {
    enemydamage = 20; // 20 damage
  }

  // Initialize variables for image and intents
  let image, intents;

  // Check if enemy damage is greater than zero
  if (enemydamage > 0) {
    // Subtract enemy damage from player's life
    player.life -= enemydamage;

    // Set image and intents for when enemy damage is greater than zero
    image = 'https://gateway.pinata.cloud/ipfs/QmRfM9uhmybSmkAqepvj1mCFjB6PzrRqhQcosE3HSVGdgs';
    intents = [<Button action="/fight">Continue</Button>];
  } else {
    // Set image and intents for when enemy damage is zero
    //counterattack light attack
    enemy1.life -= 10;

    if (enemy1.life <= 0) {
        // Set image and intents for enemy1 death
        image = 'https://gateway.pinata.cloud/ipfs/QmSeh4Q3UQ7AaPb4VSTnuoSWhvCR3cmXXVwhs4WaezPLBt';
        intents = [<Button action="/enemyturn">Continue</Button>];
      }else{

        image = 'https://gateway.pinata.cloud/ipfs/QmeN9KDXxLp8NdvBHtP2ywueSfMbB9Aze4s8BLvUZus288';
        intents = [<Button action="/fight">Continue</Button>];
      }

    
  }

  // Check if player's life is 0 or less (player death)
  if (player.life <= 0) {
    // Set image and intents for player death
    image = 'https://gateway.pinata.cloud/ipfs/Qmc5GbL95RbCd5rSA6nzf6p6AspWmdvMVY97wMvAEeNuFy';
    intents = [<Button action="/gameover">Continue</Button>];
  }

  // Return the response object
  return c.res({
    image: image,
    intents: intents
  });
});



app.frame('/gameover', (c) => {

  //enemy1.life -= 70;
 
  return c.res({
    action:'/',
    image : 'https://gateway.pinata.cloud/ipfs/QmZr3YFW95j8tNX6MXvB4WYSXibvzwEp3VzLLjWFUT5P5z',
    
    intents: [
     
      <Button action="/">Try Again</Button>
     
     
    ],
  })
})




app.frame('/death', (c) => {

  //enemy1.life -= 70;
 
  return c.res({
    action:'/',
    image : 'https://gateway.pinata.cloud/ipfs/QmXiEbP6k9jwNA5ctgw2mtS795P18hm3bdihKGhyCgKtNQ',
    
    intents: [
     
      <Button action="/gameover">Continue</Button>
     
     
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)












/*app.frame('/', (c) => {
  // Check if Health is above 50
  if (enemy1.life > 50) {
    // If Health is above 50, return the response for this frame
    return c.res({
      action:'/encounter',
      image: (
        <div
          style={{
            color: 'black',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Begin Adventure
        </div>
      ),
      intents: [
        <Button>Explore</Button>,
        //<Button.Link href="https://www.youtube.com/watch?v=OiO6X_zL_w8&pp=ygUTYWZrIGpvdXJuZXkgdHJhaWxlcg%3D%3D">Ask Google</Button.Link>,
      ],
    });
  } else {
    // If Health is not above 50, return null to prevent rendering this frame
    return c.res({
      action:'/encounter',
      image: (
        <div
          style={{
            color: 'red',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Begin Adventure
        </div>
      ),
      intents: [
        <Button>Explore</Button>,
        //<Button.Link href="https://www.youtube.com/watch?v=OiO6X_zL_w8&pp=ygUTYWZrIGpvdXJuZXkgdHJhaWxlcg%3D%3D">Ask Google</Button.Link>,
      ],
    });
  }
});*/