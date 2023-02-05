"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyProduct_typesArgs_1 = require("./args/CreateManyProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProduct_typesResolver = class CreateManyProduct_typesResolver {
    async createManyProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProduct_typesArgs_1.CreateManyProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyProduct_typesResolver.prototype, "createManyProduct_types", null);
CreateManyProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], CreateManyProduct_typesResolver);
exports.CreateManyProduct_typesResolver = CreateManyProduct_typesResolver;
