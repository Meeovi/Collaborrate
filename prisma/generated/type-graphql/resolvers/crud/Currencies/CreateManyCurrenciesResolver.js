"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCurrenciesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCurrenciesArgs_1 = require("./args/CreateManyCurrenciesArgs");
const Currencies_1 = require("../../../models/Currencies");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCurrenciesResolver = class CreateManyCurrenciesResolver {
    async createManyCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCurrenciesArgs_1.CreateManyCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCurrenciesResolver.prototype, "createManyCurrencies", null);
CreateManyCurrenciesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], CreateManyCurrenciesResolver);
exports.CreateManyCurrenciesResolver = CreateManyCurrenciesResolver;
