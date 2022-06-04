export function getFilename(path: string): string | null {
	const match = path.match(/\/(?<filename>[\w -]+)\.[a-z0-9]+$/i);

	return match?.groups?.filename || null;
}
