const form = document.getElementById('image-form');
const input = document.getElementById('image-input');
const error = document.getElementById('image-error');

const default_info = "No Information. Don't Eat Fish!"

const redspot_info = 
`Redspot disease is a viral infection that affects various species of fish, including carp, goldfish, and koi. It is also known as koi herpesvirus (KHV) disease, as the KHV virus is the main cause of this condition. Redspot disease is highly contagious and can lead to high mortality rates in infected fish populations.

Causes:
The KHV virus is typically introduced into fish populations through the introduction of infected fish or contaminated water sources. The virus is highly contagious and can spread rapidly through a fish population. Fish that are stressed or have weakened immune systems are more susceptible to infection.

Symptoms:
The symptoms of redspot disease include red spots on the skin and gills, lethargy, loss of appetite, and respiratory distress. Infected fish may also exhibit abnormal swimming behavior, such as swimming upside down or erratically. In severe cases, fish may die within a few days of infection.

Cures:
Currently, there is no known cure for redspot disease. Infected fish may recover on their own if they have a strong immune system, but the mortality rate in infected populations can be high. Prevention is the best method of controlling redspot disease. It is important to quarantine new fish before introducing them to an established population, and to maintain good water quality and hygiene practices. Fish owners should also monitor their fish closely for signs of infection and take immediate action if symptoms appear. If an outbreak does occur, affected fish should be isolated and euthanized to prevent the spread of the virus to healthy fish.`

const eus_info = 
`Epizootic Ulcerative Syndrome (EUS) is a disease that affects freshwater and estuarine fish species. It is caused by a fungus-like organism, Aphanomyces invadans, which can infect the skin, muscles, and internal organs of fish. EUS is also known by other names such as mycotic ulcerative syndrome, red spot disease, and mycotic granulomatosis.

Causes:
The fungus-like organism, Aphanomyces invadans, is the primary cause of EUS in fish. It is known to thrive in warm and stagnant waters, especially in areas with low oxygen levels. The disease spreads through direct contact between infected and healthy fish or through the water. It can also be transmitted through infected fish food or equipment. Stress factors such as poor water quality, overcrowding, and inadequate nutrition can weaken fish's immune systems and increase their susceptibility to EUS.

Symptoms:
The symptoms of EUS vary depending on the severity of the infection. In the initial stages, infected fish may exhibit small red or brown spots on their skin, which can later develop into ulcers. The ulcers can grow to several centimeters in diameter and may be covered with a white or yellowish membrane. Fish may become lethargic, lose their appetite, and experience difficulty breathing.

Cures:
There is no known cure for EUS, and the best approach is to prevent its spread. Fish farmers and aquaculture experts can take several measures to prevent and control EUS outbreaks. These measures include:

Maintaining proper water quality, temperature, and oxygen levels in the fish's environment.
Keeping the fish population at manageable levels to prevent overcrowding.
Ensuring that fish are provided with a nutritionally balanced diet.
Quarantining new fish before introducing them to an established population.
Ensuring that equipment used in fish farming is cleaned and disinfected regularly.
Avoiding the use of contaminated fish feed or water.
Separating and treating infected fish as soon as symptoms are observed.
In conclusion, Epizootic Ulcerative Syndrome is a serious disease that can have devastating effects on freshwater and estuarine fish populations. Taking proactive measures to prevent its spread and promptly identifying and treating infected fish can help control and mitigate the impact of EUS outbreaks.`

const argulus_info = 
`Argulus disease, also known as fish lice, is a parasitic infestation that affects various species of freshwater and saltwater fish. The disease is caused by the presence of the Argulus parasite, which attaches itself to the skin, fins, and gills of fish and feeds on their blood.

Causes:
The Argulus parasite is typically introduced into fish tanks or ponds through infected fish, plants, or equipment. The parasite can also spread through contaminated water sources, such as streams or rivers. Overcrowding and poor water quality can increase the risk of Argulus infestation in fish.

Symptoms:
Symptoms of Argulus disease in fish include irritation, redness, and inflammation around the areas where the parasite has attached itself. Fish may also exhibit signs of lethargy, loss of appetite, and weight loss. In severe cases, Argulus infestation can lead to secondary infections and death.

Cures:
Treatment of Argulus disease in fish involves removing the parasites from the affected fish and controlling the spread of the infestation. Common treatments include the use of parasiticides or dips in a salt bath. It is important to treat the entire aquarium or pond and all fish to prevent reinfestation. Maintaining good water quality and avoiding overcrowding can also help prevent Argulus infestations in fish. Regular monitoring of fish for signs of infestation can help catch the disease early and improve the chances of successful treatment.`

const tail_and_fin_rot_info = 
`Tail and fin rot is a common bacterial disease that affects fish, particularly those kept in aquariums or ponds. It is characterized by the decay and degradation of the fins and tail, resulting in a ragged and frayed appearance. In severe cases, the disease can spread to other parts of the fish's body and cause death.

Causes:
Tail and fin rot disease is caused by bacteria, including Aeromonas and Pseudomonas species. These bacteria are typically present in aquariums and ponds, but they only cause disease when the fish's immune system is weakened or compromised. Stressful conditions such as poor water quality, overstocking, or inappropriate diet can weaken the fish's immune system and make it more susceptible to bacterial infection.

Symptoms:
The symptoms of tail and fin rot include ragged and frayed fins and tail, discoloration, and loss of fin tissue. In severe cases, the fins may be completely eroded, and the disease can spread to other parts of the fish's body.

Cures:
The treatment of tail and fin rot disease depends on the severity of the infection. In mild cases, improving the water quality and providing a balanced diet can help boost the fish's immune system and allow it to fight off the infection. However, in more severe cases, medication may be required. Antibiotics can be added to the water to kill the bacteria causing the infection. It is important to follow the instructions carefully and not over-treat the water as this can harm the fish and the beneficial bacteria in the aquarium or pond.

Prevention:
Preventing tail and fin rot disease involves maintaining a healthy environment for the fish. This includes regular water changes, appropriate stocking levels, and a balanced diet. It is also essential to monitor the water quality regularly, including pH, temperature, and ammonia levels. Additionally, quarantining new fish before introducing them to an existing aquarium or pond can prevent the spread of disease.`

const bacterial_gill_rot_info =
`Bacterial gill rot is a common disease in fishes that affects the gills, leading to deterioration and damage. This disease can be caused by various bacterial species, including Aeromonas, Pseudomonas, and Vibrio. The disease can lead to significant health problems, including respiratory distress, reduced oxygen uptake, and increased susceptibility to other infections.

Causes:
Bacterial gill rot in fishes can be caused by a number of factors, including poor water quality, overcrowding, stress, and injury. These factors can weaken the immune system of the fish, making it more susceptible to bacterial infections. Poor water quality is one of the most common causes of bacterial gill rot, as it creates an environment that is favorable for bacterial growth. This includes high levels of ammonia, nitrites, and other toxins.

Symptoms:
Fish affected by bacterial gill rot may exhibit several symptoms, including labored breathing, reduced activity levels, loss of appetite, and discolored or frayed gills. Infected gills may appear red or inflamed, and there may be a buildup of mucus or other materials around the gills.

Cures:
Treatment for bacterial gill rot depends on the severity of the infection and the species of bacteria involved. One of the most effective treatments is the use of antibiotics, which can help to kill off the bacteria responsible for the infection. Other treatments may include improving water quality, reducing stress, and providing supportive care, such as oxygen therapy or the use of salt baths.

Prevention:
Preventing bacterial gill rot in fishes involves maintaining good water quality, avoiding overcrowding, and minimizing stress. This includes regular water changes, monitoring water parameters, and providing adequate filtration and aeration. Fishes should be fed a balanced diet and kept in appropriate tank sizes with compatible tank mates. New fishes should be quarantined for at least a week before being introduced to the main tank to avoid introducing any diseases to the tank.`

const healthy_fish_info =
`Healthy fish refer to fish that are in good physical condition and have been raised or caught in ways that do not harm their health or compromise the safety of the food they provide.

In terms of aquaculture, healthy fish are raised in clean and well-maintained environments that support their growth and well-being. This includes providing them with appropriate food and water quality, avoiding overcrowding and minimizing stress. The use of antibiotics, hormones, and other chemicals that can harm fish health is minimized or eliminated altogether.

For wild-caught fish, healthy fish are caught using sustainable fishing practices that do not deplete fish populations or damage the marine ecosystem. These practices include using appropriate fishing gear, respecting fishing quotas and seasons, and avoiding bycatch of non-target species.

Consuming healthy fish is beneficial for human health as fish is a great source of high-quality protein, essential fatty acids, vitamins, and minerals. However, it is essential to choose fish that are low in contaminants such as mercury, PCBs, and other pollutants, particularly for pregnant women, nursing mothers, and young children.

Overall, healthy fish are not only good for our health but also for the health of the environment and the fish themselves. By choosing fish that are sustainably raised or caught, we can ensure that we are doing our part to promote a healthier and more sustainable food system.`

const broken_antanae_and_rostrum_info =
`Broken antennas and rostrums are common physical injuries that can occur in fish. Here are the definitions, causes, and potential cures for these injuries:

Broken Antennas: Antennas are sensory organs found on the heads of some fish, such as catfish and crayfish. They help the fish to locate food and navigate their environment. When a fish's antennas become broken, it can interfere with their ability to find food and may cause discomfort.

Causes: Broken antennas can be caused by a variety of factors, including trauma from being caught or handled, rough handling during transport, or bacterial or fungal infections. Poor water quality and stress can also weaken the antennas, making them more prone to breaking.

Cures: Depending on the severity of the injury, broken antennas may heal on their own over time. However, in some cases, treatment may be necessary to prevent infection or promote healing. This may include adding antibiotics or antifungal agents to the water, improving water quality, or providing a special diet to help support the fish's immune system.

Broken Rostrums: Rostrums are bony structures found on the heads of some fish, including swordfish and marlin. These structures are used for defense and can also play a role in attracting mates.

Causes: Like broken antennas, broken rostrums can be caused by trauma from being caught or handled, or from collisions with other objects in the water. Poor water quality or disease can also weaken the rostrum, making it more susceptible to breaking.

Cures: Depending on the severity of the injury, broken rostrums may heal on their own over time. However, in some cases, treatment may be necessary to prevent infection or promote healing. This may include adding antibiotics or antifungal agents to the water, improving water quality, or providing a special diet to help support the fish's immune system. In some cases, surgery may be necessary to repair the rostrum.

It's important to note that prevention is the best cure for broken antennas and rostrums. This includes providing a healthy environment for the fish, handling them gently, and avoiding any rough handling or collisions that could cause injury.`

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  if (!input.files.length || !input.files[0].type.startsWith('image/')) {
    error.classList.remove('hidden');
    return;
  }
  
  const formData = new FormData();
  formData.append('image', input.files[0]);
  
  try {
    const response = await axios.post('/predict', formData);
    const data = response.data

   let information 
   const classof = data.class.trim().toLowerCase().replaceAll(' ','_')

   if(classof == "redspot"){
    information=redspot_info
   } else if(classof == "eus"){
    information=eus_info
   } else if(classof == "argulus"){
    information=argulus_info
   }  else if(classof == "tail_and_fin_rot"){
    information=tail_and_fin_rot_info
   }  else if(classof == "broken_antennae_and_rostrum"){
    information=broken_antanae_and_rostrum_info
   }  else if(classof == "the_bacterial_gill_rot"){
    information=bacterial_gill_rot_info
   }  else if(classof == "healthy_fish"){
    information=healthy_fish_info
   } else {
    information=default_info
   }

    document.body.insertAdjacentHTML("beforeend",
    `
    <div id="prediction" class="absolute top-0 left-0 bg-black/90 flex h-screen w-screen overflow-hidden">
    <div class="bg-gray-900 text-gray-200 flex rounded-md">
  
    <div class="w-[20%]  border-r-2 border-indigo-300 p-6 flex space-y-3 flex-col">
    <span class="text-lg font-semibold text-gray-300">
    Predicted Class: ${data.class}
    </span>
    <span class="text-lg font-semibold  text-gray-300">
    Prediction Confidence: ${Math.floor(data.confidence*100)}%
    </span>
    </div>


    <div class="w-[80%] p-4 relative pt-12">
    <button
    onclick="
    document.querySelector('#prediction').remove()
    "
    class="absolute top-0 right-0 text-xl hover:text-red-500"
    >
    <i class="fa-solid fa-circle-xmark"></i>
    </button>
    <pre class="whitespace-pre overflow-auto  break-words whitespace-pre-wrap">
    ${information}
    </pre>
    </div>
  </div>`
    )

    input.value = ""

  } catch (error) {
    console.error(error);
  }
});