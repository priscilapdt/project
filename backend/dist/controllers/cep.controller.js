"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
class CepController {}
_a = CepController;
CepController.get = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    const resultsCep = yield Promise.all(
      Object.entries(params).map(([key, value]) =>
        __awaiter(void 0, void 0, void 0, function* () {
          return [key, yield _a.searchCep(value)];
        })
      )
    );
    const resultsCepObject = Object.fromEntries(resultsCep);
    res.json(resultsCepObject);
  });
CepController.searchCep = (cep) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    if (response.status == 400) throw Error("cep invalid");
    const data = yield response.json();
    if (!data) throw Error("error to send request.");
    return {
      cepNumber: cep,
      address: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
  });
exports.default = CepController;
