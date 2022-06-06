"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOotoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOotoArgs_1 = require("./args/UpsertOotoArgs");
const Ooto_1 = require("../../../models/Ooto");
const helpers_1 = require("../../../helpers");
let UpsertOotoResolver = class UpsertOotoResolver {
    async upsertOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ooto_1.Ooto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOotoArgs_1.UpsertOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOotoResolver.prototype, "upsertOoto", null);
UpsertOotoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], UpsertOotoResolver);
exports.UpsertOotoResolver = UpsertOotoResolver;
