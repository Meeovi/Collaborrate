"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneMediamanagerArgs_1 = require("./args/DeleteOneMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const helpers_1 = require("../../../helpers");
let DeleteOneMediamanagerResolver = class DeleteOneMediamanagerResolver {
    async deleteOneMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneMediamanagerArgs_1.DeleteOneMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneMediamanagerResolver.prototype, "deleteOneMediamanager", null);
DeleteOneMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], DeleteOneMediamanagerResolver);
exports.DeleteOneMediamanagerResolver = DeleteOneMediamanagerResolver;
