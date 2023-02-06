"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyProductsArgs_1 = require("./args/CreateManyProductsArgs");
const Products_1 = require("../../../models/Products");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProductsResolver = class CreateManyProductsResolver {
    async createManyProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).products.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProductsArgs_1.CreateManyProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyProductsResolver.prototype, "createManyProducts", null);
CreateManyProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], CreateManyProductsResolver);
exports.CreateManyProductsResolver = CreateManyProductsResolver;
