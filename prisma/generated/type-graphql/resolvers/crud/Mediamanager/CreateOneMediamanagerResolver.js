"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneMediamanagerArgs_1 = require("./args/CreateOneMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const helpers_1 = require("../../../helpers");
let CreateOneMediamanagerResolver = class CreateOneMediamanagerResolver {
    async createOneMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mediamanager_1.Mediamanager, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMediamanagerArgs_1.CreateOneMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneMediamanagerResolver.prototype, "createOneMediamanager", null);
CreateOneMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], CreateOneMediamanagerResolver);
exports.CreateOneMediamanagerResolver = CreateOneMediamanagerResolver;
