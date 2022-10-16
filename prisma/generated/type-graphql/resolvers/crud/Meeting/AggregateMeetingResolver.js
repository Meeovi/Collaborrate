"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMeetingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMeetingArgs_1 = require("./args/AggregateMeetingArgs");
const Meeting_1 = require("../../../models/Meeting");
const AggregateMeeting_1 = require("../../outputs/AggregateMeeting");
const helpers_1 = require("../../../helpers");
let AggregateMeetingResolver = class AggregateMeetingResolver {
    async aggregateMeeting(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMeeting_1.AggregateMeeting, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMeetingArgs_1.AggregateMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMeetingResolver.prototype, "aggregateMeeting", null);
AggregateMeetingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meeting_1.Meeting)
], AggregateMeetingResolver);
exports.AggregateMeetingResolver = AggregateMeetingResolver;
