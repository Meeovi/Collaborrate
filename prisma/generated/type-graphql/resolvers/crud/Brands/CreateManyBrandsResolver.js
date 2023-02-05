"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyBrandsArgs_1 = require("./args/CreateManyBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyBrandsResolver = class CreateManyBrandsResolver {
    async createManyBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBrandsArgs_1.CreateManyBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyBrandsResolver.prototype, "createManyBrands", null);
CreateManyBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], CreateManyBrandsResolver);
exports.CreateManyBrandsResolver = CreateManyBrandsResolver;
