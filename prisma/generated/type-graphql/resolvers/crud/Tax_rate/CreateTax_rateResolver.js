"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTax_rateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateTax_rateArgs_1 = require("./args/CreateTax_rateArgs");
const Tax_rate_1 = require("../../../models/Tax_rate");
const helpers_1 = require("../../../helpers");
let CreateTax_rateResolver = class CreateTax_rateResolver {
    async createTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rate_1.Tax_rate, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTax_rateArgs_1.CreateTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateTax_rateResolver.prototype, "createTax_rate", null);
CreateTax_rateResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], CreateTax_rateResolver);
exports.CreateTax_rateResolver = CreateTax_rateResolver;
