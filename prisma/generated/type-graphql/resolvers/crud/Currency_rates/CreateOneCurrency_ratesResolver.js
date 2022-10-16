"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneCurrency_ratesArgs_1 = require("./args/CreateOneCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const helpers_1 = require("../../../helpers");
let CreateOneCurrency_ratesResolver = class CreateOneCurrency_ratesResolver {
    async createOneCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_rates_1.Currency_rates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCurrency_ratesArgs_1.CreateOneCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCurrency_ratesResolver.prototype, "createOneCurrency_rates", null);
CreateOneCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], CreateOneCurrency_ratesResolver);
exports.CreateOneCurrency_ratesResolver = CreateOneCurrency_ratesResolver;
