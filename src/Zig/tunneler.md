https://tunneler.org/

Geoffrey Silverton


SDL Tunneler v.1.1.1 - sdl 1.2.0


- Taneli Kalvas
  - https://users.jyu.fi/~tvkalvas/
- https://users.jyu.fi/~tvkalvas/code/tunneler/
- https://github.com/guyromm/tunneler

Raymond Myers tunneltanks-0.4  - sdl 1.2.10


https://sourceforge.net/projects/ditchers/
https://ditchers.sourceforge.net/

https://app.zdechov.net/Tunneler/

Tech


Installation and configuring

## record

zig 연습용 클론코딩
SDL Tunneler v.1.1.1 이건
- 이걸 봤다


## TODO

- https://tunneler.org/overview/#more-12

press any key

shoots fired
shoots hit
percent hit (shoots hit/shoots fired)%

meters dug
meters travelled

## static library?

용량이 너무 커지는데
https://wiki.libsdl.org/SDL3/Tutorials



https://github.com/opengaming/osgameclones
https://osgameclones.com/?

- 
https://github.com/krystiankaluzny/Tanks

tetris ? - https://github.com/mmatyas/openblok

sdls - https://www.parallelrealities.co.uk/news/

f1spirit
https://f1spirit.jorito.net/

- supermario - https://github.com/AnthonySturdy/SDL-Mario-Bros.
- galaga
  - https://github.com/abdullahmaswadeh/galaga
  - https://github.com/frank-zago/xgalaga-sdl

- tuxfootball - https://tuxfootball.sourceforge.net/index.php?plugin=EnticorePluginStaticContent&config=idx%3A3
- noiz2sa
  - sdl ex - https://github.com/IoriBranford/noiz2sdl2
  - https://www.asahi-net.or.jp/~cs8k-cyu/windows/noiz2sa_e.html
- road fighter
  - https://github.com/reybits/road-fighter
  - https://www.ugolnik.info/road-fighter/
  - https://github.com/OSSGames/GAME-SDL-SPORTS-Road_Fighter_Remake
- 벽돌깨기
  - https://github.com/JoshuaCrotts/Brick-Breaker

elastomania - https://github.com/elastomania/elma-classic
- xmoto
  - https://github.com/xmoto/xmoto
  - https://xmoto.org/
- liero
  - https://www.liero.be/
  - https://github.com/gliptic/liero
  - https://github.com/albertz/openlierox
- gusanos
  - https://github.com/wesz/gusanos
- https://www.openlierox.net/
- https://github.com/albertz/openlierox


https://github.com/david-vanderson/dvui

### zine


## raylib ?


const c = @cImport({
    @cInclude("SDL3/SDL.h");
});
const std = @import("std");

pub fn main() !void {
    // 1. SDL 초기화
    if (!c.SDL_Init(c.SDL_INIT_VIDEO)) {
        std.debug.print("SDL 초기화 실패: {s}\n", .{c.SDL_GetError()});
        return error.SDLInitFailed;
    }
    defer c.SDL_Quit();

    // 2. 기본 디스플레이 ID 가져오기 (SDL3는 ID 기반)
    var count: i32 = 0;
    const displays = c.SDL_GetDisplays(&count);
    if (displays == null or count == 0) {
        std.debug.print("디스플레이를 찾을 수 없습니다.\n", .{});
        return;
    }
    const primary_display = displays[0];

    // 3. 해당 디스플레이의 전체화면 모드 목록 가져오기
    var mode_count: i32 = 0;
    // SDL3에서 SDL_GetFullscreenDisplayModes는 모드 포인터 배열을 반환합니다.
    const modes = c.SDL_GetFullscreenDisplayModes(primary_display, &mode_count);
    
    if (modes == null) {
        std.debug.print("모드 목록을 가져오는데 실패했습니다: {s}\n", .{c.SDL_GetError()});
        return;
    }
    defer c.SDL_free(@ptrCast(@constCast(modes))); // SDL3에서 할당한 메모리 해제

    std.debug.print("사용 가능한 모드 개수: {d}\n", .{mode_count});
    std.debug.print("---------------------------------\n", .{});

    // 4. 모드 순회 (Zig의 슬라이스 방식으로 접근 가능)
    const modes_slice = modes[0..@intCast(mode_count)];
    for (modes_slice) |mode_ptr| {
        const m = mode_ptr.*; // SDL_DisplayMode 구조체 역참조
        std.debug.print("{d} x {d} @ {d}Hz (픽셀 포맷: {d})\n", .{
            m.w, 
            m.h, 
            @as(i32, @intFromFloat(m.refresh_rate)), // refresh_rate는 float 타입
            m.format
        });
    }
}