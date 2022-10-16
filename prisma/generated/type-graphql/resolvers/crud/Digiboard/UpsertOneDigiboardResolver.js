"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDigiboardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneDigiboardArgs_1 = require("./args/UpsertOneDigiboardArgs");
const Digiboard_1 = require("../../../models/Digiboard");
const helpers_1 = require("../../../helpers");
let UpsertOneDigiboardResolver = class UpsertOneDigiboardResolver {
    async upsertOneDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Digiboard_1.Digiboard, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDigiboardArgs_1.UpsertOneDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneDigiboardResolver.prototype, "upsertOneDigiboard", null);
UpsertOneDigiboardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Digiboard_1.Digiboard)
], UpsertOneDigiboardResolver);
exports.UpsertOneDigiboardResolver = UpsertOneDigiboardResolver;
