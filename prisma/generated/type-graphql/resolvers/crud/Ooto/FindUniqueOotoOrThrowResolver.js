"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOotoOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueOotoOrThrowArgs_1 = require("./args/FindUniqueOotoOrThrowArgs");
const Ooto_1 = require("../../../models/Ooto");
const helpers_1 = require("../../../helpers");
let FindUniqueOotoOrThrowResolver = class FindUniqueOotoOrThrowResolver {
    async getOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ooto_1.Ooto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOotoOrThrowArgs_1.FindUniqueOotoOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOotoOrThrowResolver.prototype, "getOoto", null);
FindUniqueOotoOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], FindUniqueOotoOrThrowResolver);
exports.FindUniqueOotoOrThrowResolver = FindUniqueOotoOrThrowResolver;
