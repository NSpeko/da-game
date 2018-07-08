// -- global --
import './global/getJSON';
import './global/stopAnimation';

// -- gameLogic
import './gameLogic/constants';
import './gameLogic/gameStart';

// -- gameLogic/supportElements
import './gameLogic/supportElements/authorisation';
import './gameLogic/supportElements/spinner';

// -- gameLogic/spellLogic
import './gameLogic/spellLogic/spells';

// -- gameLogic/spellLogic/spellSupport
import './gameLogic/spellLogic/spellSupport/getRandomSpell';
import './gameLogic/spellLogic/spellSupport/initSound';
import './gameLogic/spellLogic/spellSupport/stopSound';

// -- gameLogic/SpellLogic/spellLifeCycle
import './gameLogic/spellLogic/spellLifeCycle/createSpell';
import './gameLogic/spellLogic/spellLifeCycle/endSpell';
import './gameLogic/spellLogic/spellLifeCycle/enemyAttack';
import './gameLogic/spellLogic/spellLifeCycle/spellAttack';

// -- gameLogic/spellLogic/coordinates
import './gameLogic/spellLogic/coordinates/getCoordinates';
import './gameLogic/spellLogic/coordinates/getStartX';
import './gameLogic/spellLogic/coordinates/getStartY';

// -- gameLogic/spellLogic/addSpellModal
import './gameLogic/spellLogic/addSpellModal/addSpellButtons';
import './gameLogic/spellLogic/addSpellModal/createSpellElement';

// -- gameLogic/charactersLogic/Actors
import './gameLogic/charactersLogic/Actors/Actor';
import './gameLogic/charactersLogic/Actors/creating';
import './gameLogic/charactersLogic/Actors/drawHeroes';

// -- gameLogic/charactersLogic/Enemy
import './gameLogic/charactersLogic/Enemy/Enemy';
import './gameLogic/charactersLogic/Enemy/buildEnemy/buildEnemy';
import './gameLogic/charactersLogic/Enemy/buildEnemy/getEnemy';
import './gameLogic/charactersLogic/Enemy/buildEnemy/enemyDraw';
import './gameLogic/charactersLogic/Enemy/buildEnemy/getPart';

// -- gameLogic/charactersLogic/Player
import './gameLogic/charactersLogic/Player/createGameScoreList';
import './gameLogic/charactersLogic/Player/getTop';
import './gameLogic/charactersLogic/Player/Player';
import './tasks/counting/counting';
import './tasks/speech/speech';
import './tasks/translation/translation';
import './tasks/countryCapitals/countryCapitals';
import './tasks/animalSounds/animalSounds';
import './tasks/flag/flag';
import './tasks/animal/animal';
import './tasks/shuffledWords/shuffledWords';
import './tasks/typeNumber/typeNumber';
import './tasks/typeSign/typeSign';
import './taskModal/buildTaskModal';
import './taskModal/createSolveElement';
import './taskModal/createSubmitButton';
import './taskModal/createTaskQuiz';
import './taskModal/isSolved';
import './taskModal/taskWindowLoader';
import './taskModules/addTask';
import './taskModules/animalsModule';
import './taskModules/animalsSoundsModule';
import './taskModules/capitalsModule';
import './taskModules/countingModule';
import './taskModules/drawImage';
import './taskModules/flagModule';
import './taskModules/getRandomTask';
import './taskModules/shuffledWordsModule';
import './taskModules/sortableWordsModule';
import './taskModules/speechModule';
import './taskModules/translationModule';
