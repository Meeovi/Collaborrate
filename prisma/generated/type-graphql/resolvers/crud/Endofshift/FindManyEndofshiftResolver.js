"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyEndofshiftArgs_1 = require("./args/FindManyEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const helpers_1 = require("../../../helpers");
let FindManyEndofshiftResolver = class FindManyEndofshiftResolver {
    async endofshifts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Endofshift_1.Endofshift], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEndofshiftArgs_1.FindManyEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyEndofshiftResolver.prototype, "endofshifts", null);
FindManyEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], FindManyEndofshiftResolver);
exports.FindManyEndofshiftResolver = FindManyEndofshiftResolver;
