"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyQuotesArgs_1 = require("./args/CreateManyQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyQuotesResolver = class CreateManyQuotesResolver {
    async createManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyQuotesArgs_1.CreateManyQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyQuotesResolver.prototype, "createManyQuotes", null);
CreateManyQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], CreateManyQuotesResolver);
exports.CreateManyQuotesResolver = CreateManyQuotesResolver;
