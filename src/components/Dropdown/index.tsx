import { EmojisEnum } from "../../utils/enums"
import * as S from "./styles"
export default function Dropdown(props: {
  handleEmoji: (emoji: string) => void
}) {
  const { handleEmoji } = props
  return (
    <S.Dropdown
      name="emoji"
      id="emoji"
      onChange={(e) => handleEmoji(e.target.value as string)}
    >
      {Object.keys(EmojisEnum).map((emoji) => {
        return (
          <option value={EmojisEnum[emoji as keyof typeof EmojisEnum]}>
            {EmojisEnum[emoji as keyof typeof EmojisEnum]}
          </option>
        )
      })}
    </S.Dropdown>
  )
}
