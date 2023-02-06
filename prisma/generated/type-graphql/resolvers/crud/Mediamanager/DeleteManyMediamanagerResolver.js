"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyMediamanagerArgs_1 = require("./args/DeleteManyMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyMediamanagerResolver = class DeleteManyMediamanagerResolver {
    async deleteManyMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMediamanagerArgs_1.DeleteManyMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyMediamanagerResolver.prototype, "deleteManyMediamanager", null);
DeleteManyMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], DeleteManyMediamanagerResolver);
exports.DeleteManyMediamanagerResolver = DeleteManyMediamanagerResolver;
