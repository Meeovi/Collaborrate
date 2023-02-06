"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyPartnersArgs_1 = require("./args/CreateManyPartnersArgs");
const Partners_1 = require("../../../models/Partners");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPartnersResolver = class CreateManyPartnersResolver {
    async createManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPartnersArgs_1.CreateManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyPartnersResolver.prototype, "createManyPartners", null);
CreateManyPartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], CreateManyPartnersResolver);
exports.CreateManyPartnersResolver = CreateManyPartnersResolver;
