import { Test, TestingModule } from '@nestjs/testing';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { Team } from './entities/teamTest.entity';
import { UpdateTeamDto } from './dto/update-team.dto';
import { CreateTeamDto } from './dto/create-team.dto';

const teamEntitiesList: Team[] = [
  new Team({name: 'Grass Team', pokemon: ["1","15","55","99","74","89"]}),
  new Team({name: 'Fire Team', pokemon: ["64","35","84","105","26","78"]}),
  new Team({name: 'Psychic Team', pokemon: ["12","15","29","97","35","12"]})
]

const newTeamEntity = new Team({ name: 'Normal Team'})

const updatedTeamEntity = new Team({ name: 'Normal Team', pokemon: ["23"]})

describe('TeamsController', () => {
  let controller: TeamsController;
  let service: TeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [
        {
          provide: TeamsService,
          useValue: {
            create: jest.fn().mockResolvedValue(newTeamEntity),
            login: jest.fn().mockResolvedValue(teamEntitiesList[0]),
            findAll: jest.fn().mockResolvedValue(teamEntitiesList),
            findByType: jest.fn().mockResolvedValue(teamEntitiesList[0]),
            findOne: jest.fn().mockResolvedValue(teamEntitiesList[0]),
            update: jest.fn().mockResolvedValue(updatedTeamEntity),
            remove: jest.fn().mockResolvedValue(undefined),
          }
        }
      ],
    }).compile();

    controller = module.get<TeamsController>(TeamsController);
    service = module.get<TeamsService>(TeamsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return a list of teams', async () => {
      //Act
      const result = await controller.findAll();
      //Assert
      expect(result).toEqual(teamEntitiesList);
      expect(service.findAll).toHaveBeenCalledTimes(1);
    })
  })

  describe('getOne', ()=>{
    it('should return a single user', async ()=>{
      //Act
      const result = await controller.findOne('1')
      //Assert
      expect(result).toEqual(teamEntitiesList[0]);
      expect(service.findOne).toHaveBeenCalledTimes(1);
    })
  })

  describe('create', () => {
    it('should create a new user', async () => {
      //Arrange
      const body: CreateTeamDto = {
        name: 'Fighting Team',
        pokemons: [1]
      }
      //Act
      const result = await controller.create(body)
      // Assert
      expect(result).toEqual(newTeamEntity);
      expect(service.create).toHaveBeenCalledTimes(1);
    })
  })

  describe('update', ()=> {
    it('should update a user successfully', async ()=>{
      //Arrange
      const body: UpdateTeamDto = {
        pokemons: [13,124,631,23,987,71]
      }
      //Act
      const result = await controller.update('1', body)

      //Assert
      expect(result).toEqual(updatedTeamEntity);
      expect(service.update).toHaveBeenCalledTimes(1)
    })
  })

  describe('delete', ()=> {
    it('should delete a user', async()=> {
      //Act
      const result = await controller.remove('1');
      //Assert
      expect(result).toBeUndefined();
      expect(service.remove).toHaveBeenCalledTimes(1);
    })
  })

});
