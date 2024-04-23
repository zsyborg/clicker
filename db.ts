import { MergeDeep } from 'type-fest'
import { Database as DatabaseGenerated } from './database.types'
export { Json } from './database.types'

// Override the type for a specific column in a view:
export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Views: {
        movies_view: {
          Row: {
            // id is a primary key in public.movies, so it must be `not null`
            id: number
          }
        }
      }
    }
  }
>