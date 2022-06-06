"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMeetingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateMeetingArgs_1 = require("./args/CreateMeetingArgs");
const Meeting_1 = require("../../../models/Meeting");
const helpers_1 = require("../../../helpers");
let CreateMeetingResolver = class CreateMeetingResolver {
    async createMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMeetingArgs_1.CreateMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateMeetingResolver.prototype, "createMeeting", null);
CreateMeetingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meeting_1.Meeting)
], CreateMeetingResolver);
exports.CreateMeetingResolver = CreateMeetingResolver;
