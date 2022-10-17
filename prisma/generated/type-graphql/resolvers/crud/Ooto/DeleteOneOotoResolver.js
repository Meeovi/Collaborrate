"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOotoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneOotoArgs_1 = require("./args/DeleteOneOotoArgs");
const Ooto_1 = require("../../../models/Ooto");
const helpers_1 = require("../../../helpers");
let DeleteOneOotoResolver = class DeleteOneOotoResolver {
    async deleteOneOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ooto_1.Ooto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOotoArgs_1.DeleteOneOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneOotoResolver.prototype, "deleteOneOoto", null);
DeleteOneOotoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], DeleteOneOotoResolver);
exports.DeleteOneOotoResolver = DeleteOneOotoResolver;
