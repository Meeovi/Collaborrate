"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCurrency_symbolsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyCurrency_symbolsArgs_1 = require("./args/CreateManyCurrency_symbolsArgs");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCurrency_symbolsResolver = class CreateManyCurrency_symbolsResolver {
    async createManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCurrency_symbolsArgs_1.CreateManyCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCurrency_symbolsResolver.prototype, "createManyCurrency_symbols", null);
CreateManyCurrency_symbolsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], CreateManyCurrency_symbolsResolver);
exports.CreateManyCurrency_symbolsResolver = CreateManyCurrency_symbolsResolver;
