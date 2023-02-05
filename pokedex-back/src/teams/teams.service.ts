import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) { }

  async create(createTeamDto: CreateTeamDto) {
    try {
      const response = await this.teamsRepository.save(createTeamDto);
      return {
        statusCode: 201,
        body: response
      }
    } catch (e) {
      return {
        statusCode: e.status || 502,
        body: e.message || "Internal Server Error"
      }
    }

  }

  async findAll() {
    const list = await this.teamsRepository.find();
    return {
      statusCode: 200,
      body: list
    }
  }

  async findOne(id: number) {
    try {
      const team = await this.teamsRepository.findOne({ where: { id } })
      if (team) {
        return {
          statusCode: 200,
          body: team
        }
      } else {
        return {
          statusCode: 404,
          body: "There is no team with this id"
        }
      }
    } catch (e) {
      return {
        statusCode: e.status || 502,
        body: e.message || "Internal Server Error"
      }
    }
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    try {
      const team = await this.teamsRepository.findOne({ where: { id } })
      const pokemons = team.pokemons;

      if (this.findCommonPokemons(pokemons, updateTeamDto.pokemons)) {
        return {
          statusCode: 400,
          body: "The same team cannot contain more than one species of a pokemon!"
        }
      } else {
        pokemons.push(...updateTeamDto.pokemons);
        updateTeamDto.pokemons = pokemons;

        if (updateTeamDto.pokemons.length > 6) {
          return {
            statusCode: 400,
            body: "A team cannot contain more than 6 pokemons!"
          }
        }

        const updatedteam = await this.teamsRepository.update({ id }, updateTeamDto)
        if (updatedteam) {
          return {
            statusCode: 201,
            body: updatedteam
          }
        } else {
          return {
            statusCode: 404,
            body: "There is no team with this id"
          }
        }
      }
    } catch (e) {
      return {
        statusCode: e.status || 502,
        body: e.message || "Internal Server Error"
      }
    }
  }

  async remove(id: number) {
    try {
      const deletedteam = await this.teamsRepository.delete(id)
      return {
        statusCode: 200,
        body: deletedteam
      }
    } catch (e) {
      return {
        statusCode: e.status || 502,
        body: e.message || "Internal Server Error"
      }
    }
  }

  findCommonPokemons(array1, array2) {
    return array1.some(item => array2.includes(item))
  }
}
