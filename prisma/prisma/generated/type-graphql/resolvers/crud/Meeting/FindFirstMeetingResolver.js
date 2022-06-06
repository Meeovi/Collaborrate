"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMeetingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstMeetingArgs_1 = require("./args/FindFirstMeetingArgs");
const Meeting_1 = require("../../../models/Meeting");
const helpers_1 = require("../../../helpers");
let FindFirstMeetingResolver = class FindFirstMeetingResolver {
    async findFirstMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMeetingArgs_1.FindFirstMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstMeetingResolver.prototype, "findFirstMeeting", null);
FindFirstMeetingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meeting_1.Meeting)
], FindFirstMeetingResolver);
exports.FindFirstMeetingResolver = FindFirstMeetingResolver;
