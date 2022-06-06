"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyProduct_attributeArgs_1 = require("./args/CreateManyProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProduct_attributeResolver = class CreateManyProduct_attributeResolver {
    async createManyProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProduct_attributeArgs_1.CreateManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyProduct_attributeResolver.prototype, "createManyProduct_attribute", null);
CreateManyProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], CreateManyProduct_attributeResolver);
exports.CreateManyProduct_attributeResolver = CreateManyProduct_attributeResolver;
