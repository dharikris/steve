import { ModerationCase } from '@lib/structures/ModerationCases';

declare module 'klasa' {
	export interface LanguageKeys {
		DEFAULT: (key: string) => string;
		DEFAULT_LANGUAGE: string;
		PREFIX_REMINDER: (prefix: string) => string;
		SETTING_GATEWAY_EXPECTS_GUILD: string;
		SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data: any, key: any) => string;
		SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data: any, key: any) => string;
		SETTING_GATEWAY_SPECIFY_VALUE: string;
		SETTING_GATEWAY_KEY_NOT_ARRAY: (key: any) => string;
		SETTING_GATEWAY_KEY_NOEXT: (key: any) => string;
		SETTING_GATEWAY_INVALID_TYPE: string;
		SETTING_GATEWAY_INVALID_FILTERED_VALUE: (piece: any, value: any) => string;
		RESOLVER_MULTI_TOO_FEW: (name: string, min: number) => string;
		RESOLVER_INVALID_BOOL: (name: string) => string;
		RESOLVER_INVALID_CHANNEL: (name: string) => string;
		RESOLVER_INVALID_CUSTOM: (name: string, type: string) => string;
		RESOLVER_INVALID_DATE: (name: string) => string;
		RESOLVER_INVALID_DURATION: (name: string) => string;
		RESOLVER_INVALID_EMOJI: (name: string) => string;
		RESOLVER_INVALID_FLOAT: (name: number) => string;
		RESOLVER_INVALID_GUILD: (name: string) => string;
		RESOLVER_INVALID_INT: (name: number) => string;
		RESOLVER_INVALID_LITERAL: (name: string) => string;
		RESOLVER_INVALID_MEMBER: (name: string) => string;
		RESOLVER_INVALID_MESSAGE: (name: string) => string;
		RESOLVER_INVALID_PIECE: (name: string, piece: string) => string;
		RESOLVER_INVALID_REGEX_MATCH: (name: string, pattern: string) => string;
		RESOLVER_INVALID_ROLE: (name: string) => string;
		RESOLVER_INVALID_STRING: (name: string) => string;
		RESOLVER_INVALID_TIME: (name: string) => string;
		RESOLVER_INVALID_URL: (name: string) => string;
		RESOLVER_INVALID_USER: (name: string) => string;
		RESOLVER_STRING_SUFFIX: string;
		RESOLVER_MINMAX_EXACTLY: (name: string, min: number, suffix: string) => string;
		RESOLVER_MINMAX_BOTH: (name: string, min: number, max: number, suffix: string) => string;
		RESOLVER_MINMAX_MIN: (name: string, min: number, suffix: string) => string;
		RESOLVER_MINMAX_MAX: (name: string, max: number, suffix: string) => string;
		REACTIONHANDLER_PROMPT: string;
		COMMANDMESSAGE_MISSING: string;
		COMMANDMESSAGE_MISSING_REQUIRED: (name: string) => string;
		COMMANDMESSAGE_MISSING_OPTIONALS: (possibles: string) => string;
		COMMANDMESSAGE_NOMATCH: (possibles: string) => string;
		MONITOR_COMMAND_HANDLER_REPROMPT: (tag: string, name: string, time: number, abortOptions: string[]) => string;
		MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag: string, name: string, time: number, cancelOptions: string[]) => string;
		MONITOR_COMMAND_HANDLER_ABORTED: string;
		INHIBITOR_COOLDOWN: (remainng: number, guildCooldown: boolean) => string;
		INHIBITOR_DISABLED_GUILD: string;
		INHIBITOR_DISABLED_GLOBAL: string;
		INHIBITOR_MISSING_BOT_PERMS: (missing: string) => string;
		INHIBITOR_NSFW: string;
		INHIBITOR_PERMISSIONS: string;
		INHIBITOR_REQUIRED_SETTINGS: (settings: string[]) => string;
		INHIBITOR_RUNIN: (types: string) => string;
		INHIBITOR_RUNIN_NONE: (name: string) => string;
		COMMAND_BLACKLIST_DESCRIPTION: string;
		COMMAND_BLACKLIST_SUCCESS: (usersAdded: string[], usersRemoved: string[], guildsAdded: string[], guildsRemoved: string[]) => string;
		COMMAND_EVAL_DESCRIPTION: string;
		COMMAND_EVAL_EXTENDEDHELP: string;
		COMMAND_EVAL_ERROR: (time: string, output: string, type: string) => string;
		COMMAND_EVAL_OUTPUT: (time: string, output: string, type: string) => string;
		COMMAND_EVAL_SENDFILE: (time: string, type: string) => string;
		COMMAND_EVAL_SENDCONSOLE: (time: string, type: string) => string;
		COMMAND_UNLOAD: (type: string, name: string) => string;
		COMMAND_UNLOAD_DESCRIPTION: string;
		COMMAND_UNLOAD_WARN: string;
		COMMAND_TRANSFER_ERROR: string;
		COMMAND_TRANSFER_SUCCESS: (type: string, name: string) => string;
		COMMAND_TRANSFER_FAILED: (type: string, name: string) => string;
		COMMAND_TRANSFER_DESCRIPTION: string;
		COMMAND_RELOAD: (type: string, name: string, time: string) => string;
		COMMAND_RELOAD_FAILED: (type: string, name: string) => string;
		COMMAND_RELOAD_ALL: (type: string, time: string) => string;
		COMMAND_RELOAD_EVERYTHING: (time: string) => string;
		COMMAND_RELOAD_DESCRIPTION: string;
		COMMAND_REBOOT: string;
		COMMAND_REBOOT_DESCRIPTION: string;
		COMMAND_LOAD: (time: string, type: string, name: string) => string;
		COMMAND_LOAD_FAIL: string;
		COMMAND_LOAD_ERROR: (type: string, name: string, error: string) => string;
		COMMAND_LOAD_DESCRIPTION: string;
		COMMAND_PING: string;
		COMMAND_PING_DESCRIPTION: string;
		COMMAND_PINGPONG: (diff: number, ping: number) => string;
		COMMAND_INVITE: () => string[];
		COMMAND_INVITE_DESCRIPTION: string;
		COMMAND_INFO: string[];
		COMMAND_INFO_DESCRIPTION: string;
		COMMAND_HELP_DESCRIPTION: string;
		COMMAND_HELP_DATA: {
			TITLE: (description: string) => string;
			USAGE: (usage: string) => string;
			EXTENDED: (extendedHelp: string) => string;
			FOOTER: (name: string) => string;
		};
		COMMAND_HELP_NO_EXTENDED: string;
		COMMAND_HELP_DM: string;
		COMMAND_HELP_NODM: string;
		COMMAND_HELP_USAGE: (usage: string) => string;
		COMMAND_HELP_EXTENDED: string;
		COMMAND_ENABLE: (type: string, name: string) => string;
		COMMAND_ENABLE_DESCRIPTION: string;
		COMMAND_DISABLE: (type: string, name: string) => string;
		COMMAND_DISABLE_DESCRIPTION: string;
		COMMAND_DISABLE_WARN: string;
		COMMAND_CONF_NOKEY: string;
		COMMAND_CONF_NOVALUE: string;
		COMMAND_CONF_GUARDED: (name: string) => string;
		COMMAND_CONF_UPDATED: (key: string, response: string) => string;
		COMMAND_CONF_KEY_NOT_ARRAY: string;
		COMMAND_CONF_GET_NOEXT: (key: string) => string;
		COMMAND_CONF_GET: (key: string, value: string) => string;
		COMMAND_CONF_RESET: (key: string, response: string) => string;
		COMMAND_CONF_NOCHANGE: (key: string) => string;
		COMMAND_CONF_SERVER_DESCRIPTION: string;
		COMMAND_CONF_SERVER: (key: string, list: string) => string;
		COMMAND_CONF_USER_DESCRIPTION: string;
		COMMAND_CONF_USER: (key: string, list: string) => string;
		COMMAND_STATS: (memUsage: number, uptime: string, users: number, guilds: number, channels: number, klasaVersion: string, discordVersion: string, processVersion: string) => string[];
		COMMAND_STATS_DESCRIPTION: string;
		MESSAGE_PROMPT_TIMEOUT: string;
		TEXT_PROMPT_ABORT_OPTIONS: string[];
		USER_NOT_IN_GUILD: (user: string) => string;
		ROLES: string;
		NONE: string;
		NO_PARENT_CATEGORY: string;
		REMOVED_FROM: string;
		ADDED_TO: string;
		ARGUMENT_TIMESPAN_INVALID: (arg: string) => string;
		ARGUMENT_USERNAME_CANNOTFIND: (search: string) => string;
		ARGUMENT_USERNAME_MULTIPLE: (users: string) => string;
		COMMAND_CHOOSE_DESCRIPTION: string;
		COMMAND_CHOOSE_EXTENDED: string;
		COMMAND_CHOOSE_RESPONSE: (choice: string) => string;
		COMMAND_CHOOSE_TOOFEW: string;
		COMMAND_RATE_DESCRIPTION: string;
		COMMAND_RATE_EXTENDED: string;
		COMMAND_RATE_RESPONSE: (thing: string, rating: number) => string;
		COMMAND_ROCKPAPERSCISSORS_DESCRIPTION: string;
		COMMAND_ROCKPAPERSCISSORS_EXTENDED: string;
		COMMAND_ROCKPAPERSCISSORS_WINNER: (playerMove: string, steveMove: string, winner: number) => string;
		COMMAND_AUDINO_DESCRIPTION: string;
		COMMAND_AUDINO_EXTENDED: string;
		COMMAND_F_DESCRIPTION: string;
		COMMAND_F_EXTENDED: string;
		COMMAND_8BALL_DESCRIPTION: string;
		COMMAND_8BALL_EXTENDED: string;
		COMMAND_8BALL_RESPONSES: string[];
		MODERATION_NODURATION: string;
		MODERATION_NOREASON: string;
		MODERATION_NOSTEVE: string;
		MODERATION_NOSELF: string;
		MODERATION_HIGHERROLE: (user: string) => string;
		MODERATION_CASE_DISPLAY_FIELD_TARGET: string;
		MODERATION_CASE_DISPLAY_FIELD_MODERATOR: string;
		MODERATION_CASE_DISPLAY_FIELD_DURATION: string;
		MODERATION_CASE_DISPLAY_FIELD_REASON: string;
		MODERATION_CASE_DISPLAY_FOOTER: (caseNumber: number, targetID: string) => string;
		MODERATION_CASE_DISPLAY_TIME_REMAINING: (time: string) => string;
		COMMAND_MUTE_DESCRIPTION: string;
		COMMAND_MUTE_EXTENDED: string;
		COMMAND_MUTE_SUCCESS: (target: string, thisCase: ModerationCase) => string;
		COMMAND_MUTE_UNABLE: (target: string) => string;
		COMMAND_DEAFEN_DESCRIPTION: string;
		COMMAND_DEAFEN_EXTENDED: string;
		COMMAND_DEAFEN_UNABLE: (target: string) => string;
		COMMAND_DEAFEN_SUCCESS: (target: string, thisCase: ModerationCase) => string;
		COMMAND_BAN_DESCRIPTION: string;
		COMMAND_BAN_EXTENDED: string;
		COMMAND_BAN_UNABLE: (target: string) => string;
		COMMAND_BAN_SUCCESS: (target: string, thisCase: ModerationCase) => string;
		COMMAND_KICK_DESCRIPTION: string;
		COMMAND_KICK_EXTENDED: string;
		COMMAND_KICK_UNABLE: (target: string) => string;
		COMMAND_KICK_SUCCESS: (target: string, thisCase: ModerationCase) => string;
		COMMAND_UNBAN_DESCRIPTION: string;
		COMMAND_UNBAN_EXTENDED: string;
		COMMAND_UNBAN_UNABLE: (target: string) => string;
		COMMAND_UNBAN_SUCCESS: (target: string, thisCase: ModerationCase) => string;
		COMMAND_UNMUTE_DESCRIPTION: string;
		COMMAND_UNMUTE_EXTENDED: string;
		COMMAND_UNMUTE_UNABLE: (target: string) => string;
		COMMAND_UNMUTE_SUCCESS: (target: string, thisCase: ModerationCase) => string;
		COMMAND_UNDEAFEN_DESCRIPTION: string;
		COMMAND_UNDEAFEN_EXTENDED: string;
		COMMAND_UNDEAFEN_UNABLE: (target: string) => string;
		COMMAND_UNDEAFEN_SUCCESS: (target: string, thisCase: ModerationCase) => string;
		COMMAND_PERMISSIONS_DESCRIPTION: string;
		COMMAND_PERMISSIONS_HAS_ALL: (user: string) => string;
		COMMAND_NICKNAME_DESCRIPTION: string;
		COMMAND_NICKNAME_EXTENDED: string;
		COMMAND_NICKNAME_SET: (user: string) => string;
		COMMAND_NICKNAME_CLEARED: (user: string) => string;
		COMMAND_ROLE_DESCRIPTION: string;
		COMMAND_ROLE_EXTENDED: string;
		COMMAND_ROLE_REMOVE: (user: string, role: string) => string;
		COMMAND_ROLE_ADD: (user: string, role: string) => string;
		COMMAND_LOCK_DESCRIPTION: string;
		COMMAND_LOCK_EXTENDED: string;
		COMMAND_LOCK_LOCKED: string;
		COMMAND_UNLOCK_DESCRIPTION: string;
		COMMAND_UNLOCK_EXTENDED: string;
		COMMAND_UNLOCK_UNLOCKED: string;
		COMMAND_SLOWMODE_DESCRIPTION: string;
		COMMAND_SLOWMODE_EXTENDED: string;
		COMMAND_SLOWMODE_RESET: string;
		COMMAND_SLOWMODE_SET: (duration: string) => string;
		COMMAND_PURGE_DESCRIPTION: string;
		COMMAND_PURGE_EXTENDED: string;
		COMMAND_PURGE_PURGED: (size: number) => string;
		COMMAND_SNIPPET_DESCRIPTION: string;
		COMMAND_SNIPPET_EXTENDED: string;
		COMMAND_SNIPPET_ADD: (name: string) => string;
		COMMAND_SNIPPET_EDIT: (name: string) => string;
		COMMAND_SNIPPET_REMOVE: (name: string) => string;
		COMMAND_SNIPPET_NOPERMISSION: string;
		COMMAND_SNIPPET_ALREADYEXISTS: (name: string) => string;
		COMMAND_SNIPPET_INVALID: (name: string) => string;
		COMMAND_SNIPPET_NOSNIPS: string;
		COMMAND_SNIPPET_RESET: string;
		COMMAND_REMIND_DESCRIPTION: string;
		COMMAND_REMIND_EXTENDED: string;
		RESOLVER_REMINDER_LENGTH: string;
		RESOLVER_REMINDER_INVALID: (arg: string | number) => string;
		COMMAND_REMIND_CREATED: (duration: string) => string;
		COMMAND_REMIND_CANCELED: (content: string) => string;
		COMMAND_REMIND_NOREMINDERS: string;
		COMMAND_REMINDER_DISPLAY_HIDDEN: string;
		COMMAND_REMIND_VIEW_EMBED: {
			TITLE: string;
		};
		COMMAND_ASSIGN_DESCRIPTION: string;
		COMMAND_ASSIGN_EXTENDED: string;
		COMMAND_ASSIGN_EDIT_ADD: (roles: string) => string;
		COMMAND_ASSIGN_EDIT_REMOVE: (roles: string) => string;
		COMMAND_ASSIGN_NOTSTAFF: string;
		COMMAND_ASSIGN_NOTASSIGNABLE: (role: string) => string;
		COMMAND_ASSIGN_ROLE_ADD: (roles: string) => string;
		COMMAND_ASSIGN_ROLE_REMOVE: (roles: string) => string;
		COMMAND_WHOIS_DESCRIPTION: string;
		COMMAND_WHOIS_EXTENDED: string;
		COMMAND_WHOIS_DATE: (duration: string, date: string) => string;
		COMMAND_WHOIS_JOINEDGUILD_HOURS: (hours: number, date: string) => string;
		COMMAND_WHOIS_EMBED: {
			FIELD_TITLES: {
				DISPLAY_NAME: string;
				ACCOUNT_CREATED: string;
				JOINED_GUILD: string;
				ROLES: string;
			};
			FOOTER: (id: string) => string;
		};
		COMMAND_SERVERINFO_DESCRIPTION: string;
		COMMAND_SERVERINFO_EXTENDED: string;
		COMMAND_SERVERINFO_EMBED: {
			FIELD_TITLES: {
				TOTAL_MEMBERS: string;
				HUMANS: string;
				BOTS: string;
				TEXT_CHANNELS: string;
				VOICE_CHANNELS: string;
				ROLES: string;
				EMOJIS: string;
				MEMBERS_WITH_ROLES: string;
			};
			FOOTER: (date: string, duration: string) => string;
		};
		COMMAND_ROLEINFO_DESCRIPTION: string;
		COMMAND_ROLEINFO_EXTENDED: string;
		COMMAND_ROLEINFO_RESTRICTED: string;
		COMMAND_ROLEINFO_NOMEMBERS: string;
		COMMAND_ROLEINFO_TOOMANY: string;
		COMMAND_ROLEINFO_EMBED: {
			DESCRIPTION: (role: string, date: string) => string;
			FOOTER: (assignable: boolean) => string;
		};
		COMMAND_FEEDBACK_DESCRIPTION: string;
		COMMAND_FEEDBACK_EXTENDED: string;
		COMMAND_FEEDBACK_NO_GUILD: string;
		COMMAND_FEEDBACK_NO_CHANNEL: string;
		COMMAND_FEEDBACK_SENT: string;
		EVENT_CHANNELCREATE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (type: string, name: string) => string;
		};
		EVENT_CHANNELDELETE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (type: string, name: string) => string;
		};
		EVENT_CHANNELUPDATE_NAMECHANGE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (oldName: string, newName: string, type: string) => string;
		};
		EVENT_EMOJICREATE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (name: string) => string;
		};
		EVENT_EMOJIDELETE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (name: string) => string;
		};
		EVENT_EMOJIUPDATE_NAMECHANGE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (oldName: string, newName: string, animated: boolean) => string;
		};
		EVENT_ROLECREATE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (name: string) => string;
		};
		EVENT_ROLEDELETE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (name: string) => string;
		};
		EVENT_ROLEUPDATE_NAMECHANGE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (oldName: string, newName: string) => string;
		};
		EVENT_GUILDMEMBERADD_EMBED: {
			FIELD_TITLES: {
				BOT: (executor: string) => string;
				HUMAN: string;
			};
			FIELD_VALUES: {
				ACCOUNT_AGE: (duration: string) => string;
			};
			FOOTER: (id: string) => string;
		};
		EVENT_GUILDMEMBERREMOVE_EMBED: {
			FIELD_TITLES: {
				JOIN_DATE: (bot: boolean) => string;
				ROLES: string;
			};
			FIELD_VALUES: {
				JOIN_DATE: (duration: string) => string;
			};
			FOOTER: (id: string) => string;
		};
		EVENT_GUILDMEMBERUPDATE_ROLEUPDATE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (type: string, role: string, executor: string) => string;
		};
		EVENT_GUILDMEMBERUPDATE_DISPLAYNAMECHANGE_EMBED: {
			FIELD_TITLES: {
				NEW_DISPLAY_NAME: string;
			};
			FOOTER: (id: string) => string;
		};
		EVENT_MESSAGEDELETE_UNABLE_TO_DISPLAY: string;
		EVENT_MESSAGEDELETE_EMBED: {
			FIELD_TITLES: {
				CHANNEL: (name: string, parent: string) => string;
			};
			FOOTER: (id: string, time: string) => string;
		};
		EVENT_MESSAGEDELETEBULK_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (size: number, name: string, parent: string) => string;
		};
		EVENT_GUILDBANADD_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (executor: string) => string;
		};
		EVENT_GUILDBANREMOVE_EMBED: {
			FOOTER: (id: string) => string;
			TITLE: (executor: string) => string;
		};
	}
}
