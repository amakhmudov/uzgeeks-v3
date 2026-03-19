import PropTypes from 'prop-types'

export function SpeakerCard({ time, talk, name, role, img }) {
  return (
    <div className="bg-white rounded-[4px] shadow-[0px_1px_30px_0px_rgba(0,0,0,0.1)] p-10">
      <div className="flex gap-6 items-center">
        {/* Avatar */}
        <div className="shrink-0 w-[126px] h-[126px] rounded-full overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <div className="flex flex-col gap-3">
            <p className="text-date text-muted leading-[1.2]">{time}</p>
            <p className="h3 text-black">{talk}</p>
          </div>
          <p className="h6 leading-[1.2]">
            <span className="text-brand">{name}</span>
            <span className="text-muted">{` "${role}"`}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

SpeakerCard.propTypes = {
  time: PropTypes.string.isRequired,
  talk: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
