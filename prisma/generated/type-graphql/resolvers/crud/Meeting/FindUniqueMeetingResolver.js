"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMeetingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueMeetingArgs_1 = require("./args/FindUniqueMeetingArgs");
const Meeting_1 = require("../../../models/Meeting");
const helpers_1 = require("../../../helpers");
let FindUniqueMeetingResolver = class FindUniqueMeetingResolver {
    async meeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMeetingArgs_1.FindUniqueMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMeetingResolver.prototype, "meeting", null);
FindUniqueMeetingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meeting_1.Meeting)
], FindUniqueMeetingResolver);
exports.FindUniqueMeetingResolver = FindUniqueMeetingResolver;
